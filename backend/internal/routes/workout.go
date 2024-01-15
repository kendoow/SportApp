package routes

import (
	"github.com/gorilla/mux"
	"github.com/kendoow/SportApp/backend/internal/controllers"
)

var WorkoutRoutes = func(router *mux.Router) {
	router.HandleFunc("/workout/{id:[0-9]+}", controllers.GetWorkout).Methods("GET") // get one workout on workout page
}