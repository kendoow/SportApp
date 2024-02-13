package app_service

import (
	"context"
	"fmt"
	"github.com/docker/go-connections/nat"
	"github.com/testcontainers/testcontainers-go"
	"github.com/testcontainers/testcontainers-go/wait"
)

type (
	MongoContainer struct {
		testcontainers.Container
		Config MongoContainerConfig
	}

	MongoContainerOption func(c *MongoContainerConfig)

	MongoContainerConfig struct {
		ImageTag   string
		User       string
		Password   string
		MappedPort string
		Database   string
		Host       string
	}
)

func (c MongoContainer) GetDSN() string {
	return fmt.Sprintf("mongodb://%s:%s@%s:%s/%s?authSource=admin",
		c.Config.User,
		c.Config.Password,
		c.Config.Host,
		c.Config.MappedPort,
		c.Config.Database)
}

func NewMongoContainer(ctx context.Context, opts ...MongoContainerOption) (*MongoContainer, error) {
	const (
		image = "mongo"
		port  = "27020"
	)

	config := MongoContainerConfig{
		ImageTag: "6.0.5",
		User:     "user",
		Password: "password",
		Database: "db_test",
	}

	for _, opt := range opts {
		opt(&config)
	}

	containerPort := port + "/tcp"

	req := testcontainers.GenericContainerRequest{
		ContainerRequest: testcontainers.ContainerRequest{
			Env: map[string]string{
				"MONGO_INITDB_ROOT_USERNAME": config.User,
				"MONGO_INITDB_ROOT_PASSWORD": config.Password,
				"MONGO_INITDB_DATABASE":      config.Database,
			},
			ExposedPorts: []string{
				containerPort,
			},
			Image:      fmt.Sprintf("%s:%s", image, config.ImageTag),
			WaitingFor: wait.ForListeningPort(nat.Port(containerPort)),
		},
		Started: true,
	}

	container, err := testcontainers.GenericContainer(ctx, req)
	if err != nil {
		return nil, fmt.Errorf("getting request provider: %w", err)
	}

	host, err := container.Host(ctx)
	if err != nil {
		return nil, fmt.Errorf("getting host for: %w", err)
	}

	mappedPort, err := container.MappedPort(ctx, nat.Port(containerPort))
	if err != nil {
		return nil, fmt.Errorf("getting mapped port for (%s): %w", containerPort, err)
	}

	config.MappedPort = mappedPort.Port()
	config.Host = host

	return &MongoContainer{
		Container: container,
		Config:    config,
	}, nil
}
