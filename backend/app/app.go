package app

import (
	"context"
	"fmt"
	"github.com/gorilla/mux"
	"github.com/kendoow/SportApp/backend/config"
	"github.com/kendoow/SportApp/backend/db"
	"github.com/kendoow/SportApp/backend/internal/controllers"
	"github.com/kendoow/SportApp/backend/internal/repository/workout"
	"github.com/kendoow/SportApp/backend/internal/routes"
	app_service "github.com/kendoow/SportApp/backend/internal/services/app-service"
	"github.com/kendoow/SportApp/backend/internal/utils"
	"github.com/kendoow/SportApp/backend/middleware"
	httpSwagger "github.com/swaggo/http-swagger"
	"net/http"
	"os"
)

func StartApplication(config *config.Config) {
	db, err := db.InitDB(config)
	if err != nil {
		fmt.Errorf("Cannot initalizate db: %v", err)
	}
	repo := workout.CreateRepo(db)
	repo.GetAllExercises(context.Background())
	service := app_service.CreateService(repo)
	controller := controllers.CreateController(config, service)

	r := mux.NewRouter()

	routes.AuthRoutes(r)
	routes.TemplatesRoutes(r)
	routes.WorkoutRoutes(r, controller)

	r.PathPrefix("/swagger/").Handler(httpSwagger.WrapHandler)
	handler := middleware.Logging(r)
	handler = middleware.PanicCatching(handler)
	handler = middleware.CorsMiddleware(handler)

	utils.Info.Println("Server started on", os.Getenv("PORT"))
	utils.Error.Fatal(http.ListenAndServe(os.Getenv("PORT"), handler))
}
