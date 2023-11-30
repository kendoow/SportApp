package main

import (
	"github.com/gorilla/mux"
	"github.com/kendoow/SportApp/backend/internal/routes"
	"github.com/kendoow/SportApp/backend/middleware"
	"log"
	"net/http"
)

func main() {
	r := mux.NewRouter()

	routes.AuthRoutes(r)
	routes.HealthRoutes(r)

	handler := middleware.Logging(r)
	handler = middleware.PanicCatching(handler)

	//http.Handle("/", r)
	log.Println("Server started")
	log.Fatal(http.ListenAndServe("localhost:8080", handler)) // TODO: env variable
}
