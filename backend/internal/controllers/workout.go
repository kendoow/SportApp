package controllers

import (
	"encoding/json"
	"github.com/kendoow/SportApp/backend/internal/utils"
	"net/http"
)

func (controller *Controller) GetWorkout(w http.ResponseWriter, r *http.Request) {
	//TODO обговорить вид запроса
	service := controller.service

	workouts, err := service.GetAllWorkouts()
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
