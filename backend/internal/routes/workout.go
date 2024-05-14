package routes

import (
	"github.com/gorilla/mux"
	"github.com/kendoow/SportApp/backend/internal/controllers"
	"net/http"
)

var WorkoutRoutes = func(router *mux.Router, controller *controllers.Controller) {
	//router.HandleFunc("/workout/{id:[0-9]+}", controllers.GetWorkout).Methods("GET") // get one workout on workout page
	router.HandleFunc("/workouts", controller.GetWorkout).Methods(http.MethodGet)
}
