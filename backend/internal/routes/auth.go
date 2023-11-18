package routes

import (
	"github.com/gorilla/mux"
	"github.com/kendoow/SportApp/backend/internal/controllers"
)

var AuthRoutes = func(router *mux.Router) {
	router.HandleFunc("/auth/login", controllers.Login).Methods("POST")
	router.HandleFunc("/auth/signup", controllers.SignUp).Methods("POST")
	router.HandleFunc("/auth/logout", controllers.Logout).Methods("POST")
	router.HandleFunc("/auth/reset/{id}", controllers.Reset).Methods("POST")
	router.HandleFunc("/auth/reset", controllers.Logout).Methods("POST") // full user reset
	router.HandleFunc("/auth/logout", controllers.Logout).Methods("POST")
	router.HandleFunc("/auth/refresh", controllers.Refresh).Methods("GET")
}
