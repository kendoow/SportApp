package main

import (
	"fmt"
	"github.com/gorilla/mux"
	"github.com/kendoow/SportApp/backend/internal/routes"
	"log"
	"net/http"
)

func main() {
	r := mux.NewRouter()

	routes.AuthRoutes(r)

	http.Handle("/", r)
	fmt.Print("Server started")
	log.Fatal(http.ListenAndServe("localhost:8080", r)) // TODO: env variable
}
