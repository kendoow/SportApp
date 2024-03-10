package controllers

import (
	"context"
	"encoding/json"
	"github.com/gorilla/mux"
	"github.com/kendoow/SportApp/backend/internal/model"
	app_service "github.com/kendoow/SportApp/backend/internal/services/app-service"
	"github.com/kendoow/SportApp/backend/internal/utils"
	"net/http"
)

func GetAllTemplates(w http.ResponseWriter, r *http.Request) {
	templates, err := app_service.GetAllTemplates()
	if err != nil {
		utils.Error.Println(err.Error())
		http.Error(w, "Request ends with err", http.StatusInternalServerError)
		return
	}

	if err := json.NewEncoder(w).Encode(templates); err != nil {
		utils.Error.Println(err.Error())
		http.Error(w, "Request ends with err", http.StatusInternalServerError)
	}
}

func CreateTemplate(w http.ResponseWriter, r *http.Request) {
	parsedTemplate := &model.Template{}
	utils.ParseBody(r, parsedTemplate)
	template, err := app_service.CreateTemplate(parsedTemplate)

	if err != nil {
		utils.Error.Println(err.Error())
		http.Error(w, "Creation ends with error", http.StatusInternalServerError)
		return
	}

	if err := json.NewEncoder(w).Encode(template); err != nil {
		utils.Error.Println(err.Error())
		http.Error(w, "Creation ends with error", http.StatusInternalServerError)
	}
}

func GetTemplateById(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	templateId := vars["id"]
	utils.Info.Println(templateId)
	template, err := app_service.GetTemplateById(context.TODO(), templateId)
	if err != nil {
		utils.Error.Println(err.Error())
		http.Error(w, "Get ends with error", http.StatusInternalServerError)
		return
	}

	if err := json.NewEncoder(w).Encode(template); err != nil {
		utils.Error.Println(err.Error())
		http.Error(w, "Get ends with error", http.StatusInternalServerError)
	}
}
