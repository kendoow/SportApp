package app_service

import (
	"context"
	"github.com/kendoow/SportApp/backend/internal/model/workout"
	"github.com/kendoow/SportApp/backend/internal/utils"
	"go.mongodb.org/mongo-driver/bson"
)

func (service *Service) GetAllWorkouts( /*params*/ ) (*[]*workout.Workout, error) {
	repo := service.repo

	cursor, err := repo.GetAllWorkout(context.TODO(), &bson.M{})
	if err != nil {
		return nil, err
	}
	defer cursor.Close(context.TODO())

	var workouts []*workout.Workout

	for cursor.Next(context.TODO()) {
		var elem workout.Workout
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
