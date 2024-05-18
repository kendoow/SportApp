package routes

import (
	"github.com/gorilla/mux"
	"github.com/kendoow/SportApp/backend/internal/controllers"
)

var AuthRoutes = func(router *mux.Router) {
	router.HandleFunc("/signup", controllers.SignUp).Methods("POST")
	//router.HandleFunc("/login", controllers.Login).Methods("POST")
	//router.HandleFunc("/verify_otp", controllers.VerifyOTP).Methods("POST")
	//router.HandleFunc("/resend_otp", controllers.ResendOTP).Methods("POST")
	//router.HandleFunc("/auth/logout", controllers.Logout).Methods("POST")
	//router.HandleFunc("/auth/refresh", controllers.Refresh).Methods("GET")
}
