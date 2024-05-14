package workout

import (
	"context"
	"github.com/kendoow/SportApp/backend/internal/utils"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

func (repo *Repo) GetAllExercises(ctx context.Context) (*mongo.Cursor, error) {
	exercises := repo.collections.Exercises

	filter := bson.M{}

	cursor, err := exercises.Find(ctx, filter)
	if err != nil {
		utils.Error.Println(err.Error())
		return nil, err
	}

	return cursor, nil
}
