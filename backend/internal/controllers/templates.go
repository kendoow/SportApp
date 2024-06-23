package controllers

import (
	"context"
	"encoding/json"
	"fmt"
	"github.com/gorilla/mux"
	"github.com/kendoow/SportApp/backend/internal/model"
	"github.com/kendoow/SportApp/backend/internal/utils"
	"net/http"
)

func (controller *Controller) GetAllTemplates(w http.ResponseWriter, r *http.Request) {
	service := controller.service
	templates, err := service.GetAllTemplates()
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

func (controller *Controller) CreateTemplate(w http.ResponseWriter, r *http.Request) {
	service := controller.service
	parsedTemplate := &model.Template{}
	fmt.Print(parsedTemplate)
	utils.ParseBody(r, parsedTemplate)
	template, err := service.CreateTemplate(parsedTemplate)
	fmt.Print(template)
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

func (controller *Controller) GetTemplateById(w http.ResponseWriter, r *http.Request) {
	service := controller.service
	vars := mux.Vars(r)
	templateId := vars["id"]
	utils.Info.Println(templateId)
	template, err := service.GetTemplateById(context.TODO(), templateId)

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

func (controller *Controller) DeleteTemplateById(w http.ResponseWriter, r *http.Request) {
	service := controller.service
	vars := mux.Vars(r)
	templateId := vars["id"]
	utils.Info.Println(templateId)
	err := service.DeleteTemplateById(context.TODO(), templateId)

	if err != nil {
		utils.Error.Println(err.Error())
		http.Error(w, "Get ends with error", http.StatusInternalServerError)
		return
	}
}
