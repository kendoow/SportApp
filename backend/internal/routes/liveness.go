package routes

import (
	"github.com/gorilla/mux"
	"github.com/kendoow/SportApp/backend/internal/controllers"
	"net/http"
)

var HealthRoutes = func(router *mux.Router) {
	router.HandleFunc("/health", controllers.Liveness).Methods(http.MethodGet)
}
