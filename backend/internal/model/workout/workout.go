package workout

import "time"

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

type ExerciseInfo struct {
	Name       string  `json:"name"`
	Repetition []int32 `json:"reps"`
}

type WorkoutBuilt struct {
	Name       string         `json:"name"`
	Excercises []ExerciseInfo `json:"excercises"`
}

type WorkoutTempalte struct {
	Name      string         `json:"name"`
	Status    string         `json:"status"`
	LastUsage time.Time      `json:"last_usage"`
	Exercises []ExerciseInfo `json:"exercises"`
}
