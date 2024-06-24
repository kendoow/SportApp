package model

import "time"

type Template struct {
	Name      string         `json:"name"`
	Status    string         `json:"status"`
	LastUsage time.Time      `json:"last_usage"`
	Exercises []ExerciseInfo `json:"exercises"`
}
