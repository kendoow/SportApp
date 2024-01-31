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
		Excercise struct {
			CollectionName string
		}
	}

	PostgresURL string
}

var (
	appConfig *Config
)

func initConfig() {
	//MongoProps
	appConfig.Mongo.URL = fmt.Sprintf("mongodb://%s:%s@localhost:%s",
		os.Getenv("DB_USER_MONGO"),
		os.Getenv("DB_PASSWORD_MONGO"),
		os.Getenv("DB_PORT_MONGO"))
	appConfig.Mongo.DBName = os.Getenv("DB_MONGO_DATABASE")

	//PostgresProps
	appConfig.PostgresURL = fmt.Sprintf("host=localhost user=%s password=%s port=%s database=%s",
		os.Getenv("DB_USER"),
		os.Getenv("DB_PASSWORD"),
		os.Getenv("DB_PORT"),
		os.Getenv("DB_NAME"))
}

func GetAppConfig() *Config {
	if appConfig == nil {
		initConfig()
	}
	return appConfig
}
