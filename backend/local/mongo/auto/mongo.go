package auto

import (
	"context"
	"fmt"
	"github.com/docker/docker/api/types/container"
	"github.com/docker/docker/api/types/image"
	"github.com/docker/docker/client"
	"github.com/docker/go-connections/nat"
	"github.com/kendoow/SportApp/backend/local/utils"
	"io"
	"os"
)

type MongoContainer struct {
	Port          string
	ContainerName string
	Image         string
	User          string
	Password      string
	DbName        string
	id            string
}

func (cnt *MongoContainer) Init() {
	ctx := context.Background()
	cli, err := client.NewClientWithOpts(client.WithVersion("1.41"))
	defer cli.Close()
	if err != nil {
		panic(err) //App should not start if mongo not start
	}

	if err := cnt.pullImg(ctx, cli); err != nil {
		panic(err)
	}

	cnt.id = cnt.findOrCrateContainer(ctx, cli)

	if err := cli.ContainerStart(ctx, cnt.id, container.StartOptions{}); err != nil {
		panic(err) //if container not started
	}

	//TODO logs in folder
}

func (cnt *MongoContainer) Shutdown() {
	ctx := context.Background()
	cli, _ := client.NewClientWithOpts(client.WithVersion("1.41")) //Handle err?
	cli.ContainerStop(ctx, cnt.id, container.StopOptions{})
}

func (cnt *MongoContainer) pullImg(ctx context.Context, cli *client.Client) error {
	if utils.IsImgExist(ctx, cli, cnt.Image) {
		return nil
	}

	reader, err := cli.ImagePull(ctx, fmt.Sprintf("docker.io/library/%s", cnt.Image), image.PullOptions{}) //TODO pull if not exist
	if err != nil {
		return err
	}
	io.Copy(os.Stdout, reader)

	return nil
}

func (cnt *MongoContainer) findOrCrateContainer(ctx context.Context, cli *client.Client) string {
	id, founded := utils.FindContainer(ctx, cli, cnt.ContainerName, cnt.Image)
	if founded {
		return id
	}

	return cnt.createMongoContainer(ctx, cli)
}

func (cnt *MongoContainer) createMongoContainer(ctx context.Context, cli *client.Client) string {
	hostBinding := nat.PortBinding{
		HostIP:   "0.0.0.0",
		HostPort: "27017",
	}

	containerPort, err := nat.NewPort("tcp", cnt.Port)
	if err != nil {
		panic("Unable to get port")
	}

	portBinding := nat.PortMap{containerPort: []nat.PortBinding{hostBinding}}

	containerConfig := &container.Config{
		Image: cnt.Image,
		Tty:   true,
		Env: []string{
			fmt.Sprintf("MONGO_INITDB_ROOT_USERNAME=%s", cnt.User),
			fmt.Sprintf("MONGO_INITDB_ROOT_PASSWORD=%s", cnt.Password),
			fmt.Sprintf("MONGO_INITDB_DATABASE=%s", cnt.DbName),
		},
	}
	hostConfig := &container.HostConfig{
		PortBindings: portBinding,
	}

	resp, err := cli.ContainerCreate( //TODO create if not exist
		ctx,
		containerConfig,
		hostConfig,
		nil,
		nil,
		cnt.ContainerName)
	if err != nil {
		panic(err)
	}

	return resp.ID
}
