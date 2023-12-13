package main

import (
	"github.com/gorilla/mux"
	"github.com/kendoow/SportApp/backend/internal/routes"
	"github.com/kendoow/SportApp/backend/internal/utils"
	"github.com/kendoow/SportApp/backend/middleware"
	"net/http"
	"os"
)

func main() {
	r := mux.NewRouter()

	routes.AuthRoutes(r)
	routes.HealthRoutes(r)

	handler := middleware.Logging(r)
	handler = middleware.PanicCatching(handler)
	handler = middleware.CorsMiddleware(handler)

	utils.Info.Println("Server started on", os.Getenv("PORT"))
	utils.Error.Fatal(http.ListenAndServe(os.Getenv("PORT"), handler))
}
