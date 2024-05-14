package controllers

import (
	"github.com/kendoow/SportApp/backend/config"
	app_service "github.com/kendoow/SportApp/backend/internal/services/app-service"
)

type Controller struct {
	service *app_service.Service
}

func CreateController(config *config.Config, service *app_service.Service) *Controller {
	return &Controller{
		service: service,
	}
}
