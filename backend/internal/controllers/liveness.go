package controllers

import (
	"encoding/json"
	"log"
	"net/http"
)

func Liveness(w http.ResponseWriter, r *http.Request) {
	requestBody := map[string]string{"status": "OK"}

	if err := json.NewEncoder(w).Encode(requestBody); err != nil {
		log.Fatal(err)
	}
}
