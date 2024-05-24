package containers

import (
	"context"
	"fmt"

	"github.com/docker/go-connections/nat"
	"github.com/testcontainers/testcontainers-go"
	"github.com/testcontainers/testcontainers-go/wait"
)

type MongoTestContainer struct {
	testcontainers.Container
	//add Config
	Config MongoTestContainerConfig
}

type MongoTestContainerConfig struct {
	Image        string
	Host         string
	MappedPort   string
	User         string
	Password     string
	DatabaseName string
}

func (c MongoTestContainer) GetURL() string {
	return fmt.Sprintf("mongodb://%s:%s@%s:%s/%s?authSource=admin",
		c.Config.User,
		c.Config.Password,
		c.Config.Host,
		c.Config.MappedPort,
		c.Config.DatabaseName,
	)
}

func CreateMongoTestContainer(ctx context.Context) (*MongoTestContainer, error) {

	config := MongoTestContainerConfig{
		Image:        "mongo:6.0.5",
		User:         "user",
		Password:     "password",
		DatabaseName: "db_test",
	}

	req := requestOf(&config)

	container, err := testcontainers.GenericContainer(ctx, *req)
	if err != nil {
		return nil, fmt.Errorf("getting request provider: %w", err)
	}

	host, err := container.Host(ctx)
	if err != nil {
		return nil, fmt.Errorf("getting host for: %w", err)
	}

	mappedPort, err := container.MappedPort(ctx, nat.Port("27017/tcp"))
	if err != nil {
		return nil, fmt.Errorf("getting mapped port for (%s): %w", "27017/tcp", err)
	}
	config.MappedPort = mappedPort.Port()
	config.Host = host

	//should log correctly
	fmt.Println("Host:", config.Host, config.MappedPort)

	return &MongoTestContainer{
		Container: container,
		Config:    config,
	}, nil
}

func requestOf(config *MongoTestContainerConfig) *testcontainers.GenericContainerRequest {
	containerReq := testcontainers.ContainerRequest{
		Env: map[string]string{
			"MONGO_INITDB_ROOT_USERNAME": config.User,
			"MONGO_INITDB_ROOT_PASSWORD": config.Password,
			"MONGO_INITDB_DATABASE":      config.DatabaseName,
		},
		ExposedPorts: []string{
			"27017/tcp",
		},
		Image:      config.Image,
		WaitingFor: wait.ForListeningPort(nat.Port("27017/tcp")),
	}

	return &testcontainers.GenericContainerRequest{
		ContainerRequest: containerReq,
		Started:          true,
	}
}
