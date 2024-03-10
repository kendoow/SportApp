package app_service

import (
	"context"
	"github.com/kendoow/SportApp/backend/internal/model"
	repository "github.com/kendoow/SportApp/backend/internal/repository/workout"
	"github.com/kendoow/SportApp/backend/internal/utils"
	"go.mongodb.org/mongo-driver/bson"
)

func GetAllWorkouts( /*params*/ ) (*[]*model.Workout, error) {
	cursor, err := repository.GetAllWorkout(context.TODO(), &bson.M{})
	if err != nil {
		return nil, err
	}
	defer cursor.Close(context.TODO())

	var workouts []*model.Workout

	for cursor.Next(context.TODO()) {
		var elem model.Workout
		err := cursor.Decode(&elem)
		if err != nil {
			utils.Error.Println(err.Error())
		}

		workouts = append(workouts, &elem)
	}

	if err := cursor.Err(); err != nil {
		utils.Error.Println(err.Error())
		return nil, err
	}

	return &workouts, nil
}
