package repository

import (
	"context"
	"github.com/kendoow/SportApp/backend/internal/model"
	"github.com/kendoow/SportApp/backend/internal/utils"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

func (repo *Repo) GetAllWorkout(ctx context.Context, filter *bson.M) (*mongo.Cursor, error) {
	workouts := repo.collections.Workout

	cursor, err := workouts.Find(ctx, filter)
	if err != nil {
		utils.Error.Println(err.Error())
		return nil, err
	}

	return cursor, nil
}

//TODO refactor to dao

func (repo *Repo) CreateWorkout(ctx context.Context, workout *model.Workout) error {
	workouts := repo.collections.Workout

	_, err := workouts.InsertOne(ctx, workout)
	if err != nil {
		utils.Error.Println(err.Error())
		return err
	}

	return nil
}
