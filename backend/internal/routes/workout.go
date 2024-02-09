package routes

import (
	"github.com/gorilla/mux"
	"github.com/kendoow/SportApp/backend/internal/controllers"
	"net/http"
)

var WorkoutRoutes = func(router *mux.Router) {
	//router.HandleFunc("/workout/{id:[0-9]+}", controllers.GetWorkout).Methods("GET") // get one workout on workout page
	router.HandleFunc("/workouts", controllers.GetWorkout).Methods(http.MethodGet)
	router.HandleFunc("/workout/{id}", controllers.GetWorkoutById).Methods(http.MethodGet)
	router.HandleFunc("/workout", controllers.CreateWorkout).Methods(http.MethodPost)
	router.HandleFunc("/workout", controllers.DeleteWorkouts).Methods(http.MethodDelete)
}
