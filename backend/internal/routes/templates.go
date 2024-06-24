package routes

import (
	"github.com/gorilla/mux"
	"github.com/kendoow/SportApp/backend/internal/controllers"
	"net/http"
)

var TemplatesRoutes = func(router *mux.Router, controllers *controllers.Controller) {
	router.HandleFunc("/templates", controllers.GetAllTemplates).Methods(http.MethodGet)            // get all templates
	router.HandleFunc("/templates/{id}", controllers.GetTemplateById).Methods(http.MethodGet)       // get one template
	router.HandleFunc("/templates", controllers.CreateTemplate).Methods(http.MethodPost)            // create template
	router.HandleFunc("/templates/{id}", controllers.DeleteTemplateById).Methods(http.MethodDelete) // delete one template
}
