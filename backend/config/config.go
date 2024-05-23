package config

import (
	"fmt"
	"os"
)

type Config struct {
	Mongo struct {
		URL     string
		DBName  string
		Workout struct {
			CollectionName string
		}
		Template struct {
			CollectionName string
		}
		Exercise struct {
			CollectionName string
		}
		Auth struct {
			CollectionName string
		}
	}
}

var (
	appConfig *Config
)

func initConfig() {
	appConfig = &Config{}

	//MongoProps
	appConfig.Mongo.URL = fmt.Sprintf("mongodb://%s:%s@localhost:%s",
		os.Getenv("DB_USER_MONGO"),
		os.Getenv("DB_PASSWORD_MONGO"),
		os.Getenv("DB_PORT_MONGO"))
	appConfig.Mongo.DBName = os.Getenv("DB_MONGO_DATABASE")
	appConfig.Mongo.Workout.CollectionName = "workouts"
	appConfig.Mongo.Template.CollectionName = "templates"
	appConfig.Mongo.Exercise.CollectionName = "exercises"
	appConfig.Mongo.Auth.CollectionName = "auth"

}

func GetAppConfig() *Config {
	if appConfig == nil {
		initConfig()
	}
	return appConfig
}
