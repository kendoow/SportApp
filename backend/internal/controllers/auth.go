package controllers

import (
	"encoding/json"
	"net/http"

	"github.com/kendoow/SportApp/backend/internal/services"
)

func Login(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	var requestBody map[string]interface{}
	err := json.NewDecoder(r.Body).Decode(&requestBody)
	if err != nil {
		http.Error(w, "Invalid request body", http.StatusBadRequest)
		return
	}

	user, rToken, err := services.Login(requestBody)
	if err != nil {
		http.Error(w, "Login failed", http.StatusUnauthorized)
		return
	}

	cookie := http.Cookie{
		Name:     "refreshToken",
		Value:    rToken,
		MaxAge:   30 * 24 * 60 * 60 * 1000,
		HttpOnly: true,
	}

	http.SetCookie(w, &cookie)
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(user)
}

func SignUp(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	var requestBody map[string]interface{}
	err := json.NewDecoder(r.Body).Decode(&requestBody)
	if err != nil {
		http.Error(w, "Invalid request body", http.StatusBadRequest)
		return
	}

	createdUser, rToken, err := services.SignUp(requestBody)
	if err != nil {
		http.Error(w, "SignUp failed", http.StatusUnauthorized)
		return
	}

	cookie := http.Cookie{
		Name:     "refreshToken",
		Value:    rToken,
		MaxAge:   30 * 24 * 60 * 60,
		HttpOnly: true,
	}

	http.SetCookie(w, &cookie)
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(createdUser)
}

func Logout(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	refreshToken, err := r.Cookie("refreshToken")
	if err != nil {
		http.Error(w, "Invalid request, missing refreshToken cookie", http.StatusBadRequest)
		return
	}

	token, err := services.Logout(refreshToken.Value)
	if err != nil {
		http.Error(w, "Logout failed", http.StatusUnauthorized)
		return
	}

	// Очистка куки refreshToken
	clearCookie := http.Cookie{
		Name:     "refreshToken",
		Value:    "",
		MaxAge:   -1,
		HttpOnly: true,
	}

	http.SetCookie(w, &clearCookie)

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(token)
}

func Reset(w http.ResponseWriter, r *http.Request) {

}

func Refresh(w http.ResponseWriter, r *http.Request) {

}
