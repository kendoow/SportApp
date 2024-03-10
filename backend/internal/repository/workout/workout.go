package workout

import (
	"context"
	"github.com/kendoow/SportApp/backend/config"
	"github.com/kendoow/SportApp/backend/internal/model"
	"github.com/kendoow/SportApp/backend/internal/utils"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

var (
	workoutCollection = mongoDB.Database(config.GetAppConfig().Mongo.DBName).Collection(config.GetAppConfig().Mongo.Workout.CollectionName)
)

func GetAllWorkout(ctx context.Context, filter *bson.M) (*mongo.Cursor, error) {
	cursor, err := workoutCollection.Find(ctx, filter)
	if err != nil {
		utils.Error.Println(err.Error())
		return nil, err
	}

	return cursor, nil
}

//TODO refactor to dao

func CreateWorkout(ctx context.Context, workout *model.Workout) error {
	_, err := workoutCollection.InsertOne(ctx, workout)
	if err != nil {
		utils.Error.Println(err.Error())
		return err
	}

	return nil
}
