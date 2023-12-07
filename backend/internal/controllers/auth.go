package controllers

import (
	"encoding/json"
	"github.com/kendoow/SportApp/backend/internal/model"
	"github.com/kendoow/SportApp/backend/internal/services/auth-service"
	"github.com/kendoow/SportApp/backend/internal/utils"
	"net/http"
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
		utils.Info.Println(err.Error())
		return
	}

	user, refreshToken, err := auth_service.Login(&requestBody)
	if err != nil {
		utils.Info.Printf(err.Error())
		http.Error(w, "Login failed", http.StatusUnauthorized)
		return
	}

	utils.Info.Println(refreshToken)

	cookie := http.Cookie{
		Name:     "refreshToken",
		Value:    refreshToken,
		MaxAge:   30 * 24 * 60 * 60 * 1000,
		HttpOnly: true,
	}

	http.SetCookie(w, &cookie)
	w.Header().Set("Content-Type", "application/json")
	if err := json.NewEncoder(w).Encode(user); err != nil {
		utils.Info.Panicln(err)
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

	createdUser, rToken, err := auth_service.SignUp(&requestBody)
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

	if err := auth_service.Logout(refreshToken.Value); err != nil {
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

	accessToken, err := auth_service.Refresh(refreshToken.Value)
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
