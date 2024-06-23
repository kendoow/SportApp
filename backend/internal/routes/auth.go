package routes

import (
	"github.com/gorilla/mux"
	"github.com/kendoow/SportApp/backend/internal/controllers"
)

var AuthRoutes = func(router *mux.Router, controller *controllers.Controller) {
	router.HandleFunc("/signup", controller.SignUp).Methods("POST") // register
	router.HandleFunc("/login", controller.Login).Methods("POST")   // login

	//router.Post("/verify_otp", handler.VerifyOTP)
	//router.Post("/resend_otp", handler.ResendOTP)
	//router.Get("/me", middleware.Protected(), handler.GetCurrentUser)
	//router.HandleFunc("/auth/logout", controllers.Logout).Methods("POST")
	//router.HandleFunc("/auth/reset/{id}", controllers.Reset).Methods("POST")
	//router.HandleFunc("/auth/reset", controllers.Logout).Methods("POST") // full user reset
	//router.HandleFunc("/auth/logout", controllers.Logout).Methods("POST")
	//router.HandleFunc("/auth/refresh", controllers.Refresh).Methods("GET")
}
