package routes

import (
	"github.com/gorilla/mux"
	"github.com/kendoow/SportApp/backend/internal/controllers"
)

var TemplatesRoutes = func(router *mux.Router) {
	router.HandleFunc("/templates", controllers.GetAllTemplates).Methods("GET") // get all templates
}
