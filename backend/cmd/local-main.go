package main

import (
	"fmt"
	"github.com/kendoow/SportApp/backend/app"
	"github.com/kendoow/SportApp/backend/config"
	"github.com/kendoow/SportApp/backend/local/mongo/auto"
)

func main() {
	container := auto.MongoContainer{
		Port:          "27017",
		ContainerName: "mongo-sport-app-local",
		Image:         "mongo:6.0.5",
		User:          "admin",
		Password:      "admin",
		DbName:        "local",
	}

	container.Init()
	defer container.Shutdown()

	cfg := config.GetAppConfig()
	parseConfigFromContainer(cfg, container)

	app.StartApplication(cfg)
}

func parseConfigFromContainer(cnf *config.Config, cnt auto.MongoContainer) {
	cnf.Mongo.DBName = cnt.DbName
	cnf.Mongo.URL = fmt.Sprintf("mongodb://%s:%s@localhost:%s", cnt.User, cnt.Password, cnt.Port)
}
