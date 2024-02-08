package routes

import (
	"github.com/gorilla/mux"
	"github.com/kendoow/SportApp/backend/internal/controllers"
)

var TemplatesRoutes = func(router *mux.Router) {
	router.HandleFunc("/templates", controllers.GetAllTemplates).Methods("GET")      // get all templates
	router.HandleFunc("/templates/{id}", controllers.GetTemplateById).Methods("GET") // get one template
	router.HandleFunc("/templates", controllers.CreateTemplate).Methods("POST")      // create template
}
