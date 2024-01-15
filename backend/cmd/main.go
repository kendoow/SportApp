package main

import (
	"github.com/gorilla/mux"
	_ "github.com/kendoow/SportApp/backend/docs"
	"github.com/kendoow/SportApp/backend/internal/routes"
	"github.com/kendoow/SportApp/backend/internal/utils"
	"github.com/kendoow/SportApp/backend/middleware"
	httpSwagger "github.com/swaggo/http-swagger"
	"net/http"
	"os"
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
	r := mux.NewRouter()

	routes.AuthRoutes(r)
	routes.HealthRoutes(r)
	routes.TemplatesRoutes(r)
	routes.WorkoutRoutes(r)

	r.PathPrefix("/swagger/").Handler(httpSwagger.WrapHandler)
	handler := middleware.Logging(r)
	handler = middleware.PanicCatching(handler)
	handler = middleware.CorsMiddleware(handler)

	utils.Info.Println("Server started on", os.Getenv("PORT"))
	utils.Error.Fatal(http.ListenAndServe(os.Getenv("PORT"), handler))
}
