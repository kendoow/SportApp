package utils

import (
	"context"
	"fmt"
	"github.com/docker/docker/api/types/container"
	"github.com/docker/docker/api/types/image"
	"github.com/docker/docker/client"
)

func IsImgExist(ctx context.Context, cli *client.Client, imgName string) bool {
	imgs, err := cli.ImageList(ctx, image.ListOptions{All: true})
	if err != nil {
		panic(err)
	}
	for _, img := range imgs {
		for _, name := range img.RepoTags {
			if name == imgName {
				return true
			}
		}
	}

	return false
}

func FindContainer(ctx context.Context, cli *client.Client, containerName string, imgName string) (string, bool) {
	trueName := fmt.Sprintf("/%s", containerName)
	containers, err := cli.ContainerList(ctx, container.ListOptions{All: true})
	if err != nil {
		panic(err)
	}
	for _, cnt := range containers {
		if cnt.Image != imgName {
			continue
		}

		for _, name := range cnt.Names {
			if name == trueName {
				return cnt.ID, true
			}
		}
	}

	return "", false
}
