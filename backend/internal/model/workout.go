package model

type Workout struct {
	Name            string `json:"name"`
	CreationDate    string/*time.Time*/ `json:"creation_date"`
	Status          string `json:"status"`
	WorkoutDuration string/*time.Duration*/ `json:"workout_duration"`
	Tags            []string `json:"tags"`
}

type ExerciseType struct {
	Name string   `json:"name"`
	Tags []string `json:"tags"`
}

type WorkoutBuilt struct {
	Name      string         `json:"name"`
	Exercises []ExerciseInfo `json:"excercises"`
}
