package app_service

import (
	"context"
	"github.com/kendoow/SportApp/backend/internal/model"
	repository "github.com/kendoow/SportApp/backend/internal/repository/workout"
	"github.com/kendoow/SportApp/backend/internal/utils"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
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

func CreateWorkout(creatingWorkout *model.Workout) (interface{}, error) {
	result, err := repository.CreateWorkout(context.TODO(), creatingWorkout)
	if err != nil {
		return "", err
	}

	return result.InsertedID, nil
}

func GetWorkoutById(ctx context.Context, id string) (*model.Workout, error) {
	_id, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		utils.Error.Println(err)
		return nil, err
	}

	filter := bson.D{{"_id", _id}}
	result := repository.GetWorkoutById(ctx, filter)
	var elem model.Workout

	err = result.Decode(&elem)
	if err != nil {
		utils.Error.Println(err.Error())
	}
	return &elem, nil
}

func DeleteWorkouts(ids *model.BulkWorkoutIds) (*model.BulkWorkoutIds, error) {

}
