package controllers

import (
	"encoding/json"
	"github.com/kendoow/SportApp/backend/internal/model"
	"log"
	"net/http"

	"github.com/kendoow/SportApp/backend/internal/services"
)

func Login(w http.ResponseWriter, r *http.Request) {
	//if r.Method != http.MethodPost {
	//	http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
	//	return
	//}

	var requestBody model.UserCreds

	err := json.NewDecoder(r.Body).Decode(&requestBody)
	if err != nil {
		http.Error(w, "Invalid request body", http.StatusBadRequest)
		log.Println(err.Error())
		return
	}

	user, refreshToken, err := services.Login(&requestBody)
	if err != nil {
		log.Println(err.Error())
		http.Error(w, "Login failed", http.StatusUnauthorized)
		return
	}

	log.Println(refreshToken)

	cookie := http.Cookie{
		Name:     "refreshToken",
		Value:    refreshToken,
		MaxAge:   30 * 24 * 60 * 60 * 1000,
		HttpOnly: true,
	}

	http.SetCookie(w, &cookie)
	w.Header().Set("Content-Type", "application/json")
	if err := json.NewEncoder(w).Encode(user); err != nil {
		log.Panicln(err)
	}
}

func SignUp(w http.ResponseWriter, r *http.Request) {
	//if r.Method != http.MethodPost {
	//	http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
	//	return
	//}

	var requestBody model.UserCreds

	err := json.NewDecoder(r.Body).Decode(&requestBody)
	if err != nil {
		http.Error(w, "Invalid request body", http.StatusBadRequest)
		return
	}

	createdUser, rToken, err := services.SignUp(&requestBody)
	if err != nil {
		http.Error(w, err.Error(), http.StatusUnauthorized)
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
	//if r.Method != http.MethodPost {
	//	http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
	//	return
	//} // by default

	refreshToken, err := r.Cookie("refreshToken")
	if err != nil {
		http.Error(w, "Invalid request, missing refreshToken cookie", http.StatusBadRequest)
		return
	}

	if err := services.Logout(refreshToken.Value); err != nil {
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

	//json.NewEncoder(w).Encode()
}

func Reset(w http.ResponseWriter, r *http.Request) {

}

func Refresh(w http.ResponseWriter, r *http.Request) {
	refreshToken, err := r.Cookie("refreshToken")
	if err != nil {
		http.Error(w, "Invalid request, missing refreshToken cookie", http.StatusBadRequest)
		return
	}

	accessToken, err := services.Refresh(refreshToken.Value)
	if err != nil {
		http.Error(w, "RefreshFailed failed", http.StatusUnauthorized)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	if err := json.NewEncoder(w).Encode(
		map[string]string{"accessToken": accessToken}); err != nil {
		//TODO panic
	}
}
