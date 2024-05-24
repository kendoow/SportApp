package model

import "time"

type Workout struct {
	Name            string `json:"name" bson:"name"`
	CreationDate    string/*time.Time*/ `json:"creation_date" bson:"creation_date"`
	Status          string `json:"status" bson:"status"`
	WorkoutDuration string/*time.Duration*/ `json:"workout_duration" bson:"workout_duration"`
	Tags            []string `json:"tags" bson:"tags"` //TODO should be enum?
}

type ExerciseType struct {
	Name string   `json:"name"`
	Tags []string `json:"tags"`
}

type ExerciseInfo struct {
	Name       string  `json:"name" bson:"name"`
	Repetition []int32 `json:"reps" bson:"repetition"`
}

type WorkoutBuilt struct {
	Name      string         `json:"name"`
	Exercises []ExerciseInfo `json:"exercises"`
}

type WorkoutTempalte struct {
	Name      string         `json:"name" bson:"name"`
	Status    string         `json:"status" bson:"status"`
	LastUsage time.Time      `json:"last_usage" bson:"last_usage"`
	Exercises []ExerciseInfo `json:"exercises" bson:"exercises"`
}
