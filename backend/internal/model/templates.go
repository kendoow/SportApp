package model

import "time"

type ExerciseInfo struct {
	Name       string  `json:"name"`
	Repetition []int32 `json:"reps"`
}

type WorkoutTemplate struct {
	Name      string         `json:"name"`
	Status    string         `json:"status"`
	LastUsage time.Time      `json:"last_usage"`
	Exercises []ExerciseInfo `json:"exercises"`
}
