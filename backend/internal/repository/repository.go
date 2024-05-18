package repository

import (
	"github.com/kendoow/SportApp/backend/config"
	db "github.com/kendoow/SportApp/backend/db/mongo"
	"go.mongodb.org/mongo-driver/mongo"
)

type Repo struct {
	db          *db.DB
	collections *collections
}

func CreateRepo(db *db.DB) *Repo {

	return &Repo{
		db,
		initDBCollection(db.GetClient()),
	}
}

type collections struct {
	Exercises *mongo.Collection
	Template  *mongo.Collection
	Workout   *mongo.Collection
}

func initDBCollection(client *mongo.Client) *collections {
	mongoConfig := config.GetAppConfig().Mongo

	database := client.Database(mongoConfig.DBName)

	exercies := database.Collection(mongoConfig.Exercise.CollectionName)
	template := database.Collection(mongoConfig.Template.CollectionName)
	workout := database.Collection(mongoConfig.Workout.CollectionName)

	return &collections{
		Exercises: exercies,
		Template:  template,
		Workout:   workout,
	}
}
