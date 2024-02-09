package controllers

import (
	"context"
	"encoding/json"
	"github.com/gorilla/mux"
	"github.com/kendoow/SportApp/backend/internal/model"
	app_service "github.com/kendoow/SportApp/backend/internal/services/app-service"
	"github.com/kendoow/SportApp/backend/internal/utils"
	"net/http"
)

func GetWorkout(w http.ResponseWriter, r *http.Request) {
	//TODO обговорить вид запроса

	workouts, err := app_service.GetAllWorkouts()
	if err != nil {
		utils.Error.Println(err.Error()) //TODO обговорить политику обработки
		http.Error(w, "Request ends with err", http.StatusInternalServerError)
		return
	}

	if err := json.NewEncoder(w).Encode(workouts); err != nil {
		utils.Error.Println(err.Error())
		http.Error(w, "Request ends with err", http.StatusInternalServerError)
	}
}

func CreateWorkout(w http.ResponseWriter, r *http.Request) {
	parsedWorkout := &model.Workout{}
	utils.ParseBody(r, parsedWorkout)
	workoutId, err := app_service.CreateWorkout(parsedWorkout)

	if err != nil {
		utils.Error.Println(err.Error())
		http.Error(w, "Creation ends with error", http.StatusInternalServerError)
		return
	}

	if err := json.NewEncoder(w).Encode(workoutId); err != nil {
		utils.Error.Println(err.Error())
		http.Error(w, "Creation ends with error", http.StatusInternalServerError)
	}
}

func GetWorkoutById(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	workoutId := vars["id"]
	utils.Info.Println(workoutId)
	template, err := app_service.GetWorkoutById(context.TODO(), workoutId)
	if err != nil {
		utils.Error.Println(err.Error())
		http.Error(w, "Get ends with error", http.StatusInternalServerError)
		return
	}

	if err := json.NewEncoder(w).Encode(template); err != nil {
		utils.Error.Println(err.Error())
		http.Error(w, "Get ends with error", http.StatusInternalServerError)
	}
}

func DeleteWorkouts(w http.ResponseWriter, r *http.Request) {
	var ids model.BulkWorkoutIds
	utils.ParseBody(r, &ids)

	deletedBulk, err := app_service.DeleteWorkouts(&ids)
	if err != nil {

	}

	if err := json.NewEncoder(w).Encode(deletedBulk); err != nil {

	}
}
