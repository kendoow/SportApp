package main

import (
	"github.com/kendoow/SportApp/backend/app"
	"github.com/kendoow/SportApp/backend/config"
	_ "github.com/kendoow/SportApp/backend/docs"
)

// @title           SportApp API
// @version         1.0
// @description     API Server for SportApp application.

// @host      localhost:8080
// @BasePath  /

// @securityDefinitions.apikey  ApiKeyAuth
// @in header
// @name Authorization

func main() {
	cfg := config.GetAppConfig()

	app.StartApplication(cfg)
}
