package main

import (
	"github.com/gorilla/mux"
	"github.com/kendoow/SportApp/backend/internal/routes"
	"github.com/kendoow/SportApp/backend/internal/utils"
	"github.com/kendoow/SportApp/backend/middleware"
	"net/http"
)

func main() {
	r := mux.NewRouter()

	routes.AuthRoutes(r)
	routes.HealthRoutes(r)

	handler := middleware.Logging(r)
	handler = middleware.PanicCatching(handler)

	utils.Info.Println("Server started")
	utils.Error.Fatal(http.ListenAndServe("0.0.0.0:8080", handler)) // TODO: env variable
}
