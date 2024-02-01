package controllers

import (
	"encoding/json"
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
