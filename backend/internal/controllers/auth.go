package controllers

import (
	"encoding/json"
	"fmt"
	"github.com/kendoow/SportApp/backend/internal/model"
	"github.com/kendoow/SportApp/backend/internal/utils"
	"net/http"
)

// @Summary Authenticates a user and generates a refresh token
// @Tags auth
// @Description Endpoint to handle user login and authentication.
// @ID login
// @Accept json
// @Produce json
// @Param request body UserCredits true "User credentials for login"
// @Success 200 {object} User "Successful login"
// @Failure 400 {object} Error "Invalid request body"
// @Failure 401 {object} Error "Login failed"
// @Router /auth/login [post]

//func Login(w http.ResponseWriter, r *http.Request) {
//	//if r.Method != http.MethodPost {
//	//	http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
//	//	return
//	//}
//
//	var requestBody model.UserCredits
//
//	err := json.NewDecoder(r.Body).Decode(&requestBody)
//	if err != nil {
//		http.Error(w, "Invalid request body", http.StatusBadRequest)
//		utils.Info.Println(err.Error())
//		return
//	}
//
//	user, refreshToken, err := services.Login(&requestBody)
//	if err != nil {
//		utils.Info.Printf(err.Error())
//		http.Error(w, "Login failed", http.StatusUnauthorized)
//		return
//	}
//
//	utils.Info.Println(refreshToken)
//
//	cookie := http.Cookie{
//		Name:     "refreshToken",
//		Value:    refreshToken,
//		MaxAge:   1000,
//		HttpOnly: true,
//	}
//
//	http.SetCookie(w, &cookie)
//	w.Header().Set("Content-Type", "application/json")
//	if err := json.NewEncoder(w).Encode(user); err != nil {
//		utils.Info.Panicln(err)
//	}
//}

func (controller *Controller) SignUp(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	service := controller.service
	var requestBody model.RegisterBody
	fmt.Print(requestBody)
	err := json.NewDecoder(r.Body).Decode(&requestBody)
	if err != nil {
		utils.Error.Println("Invalid request body")
		http.Error(w, "Invalid request body", http.StatusBadRequest)
		return
	}

	createdUserId, err := service.SignUp(&requestBody)
	if err != nil {
		utils.Error.Println("User cannot be created")
		http.Error(w, err.Error(), http.StatusUnauthorized)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(createdUserId)
}

//func Logout(w http.ResponseWriter, r *http.Request) {
//	//if r.Method != http.MethodPost {
//	//	http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
//	//	return
//	//} // by default
//
//	refreshToken, err := r.Cookie("refreshToken")
//	if err != nil {
//		http.Error(w, "Invalid request, missing refreshToken cookie", http.StatusBadRequest)
//		return
//	}
//
//	if err := services.Logout(refreshToken.Value); err != nil {
//		http.Error(w, "Logout failed", http.StatusUnauthorized)
//		return
//	}
//
//	// Очистка куки refreshToken
//	clearCookie := http.Cookie{
//		Name:     "refreshToken",
//		Value:    "",
//		MaxAge:   -1,
//		HttpOnly: true,
//	}
//
//	http.SetCookie(w, &clearCookie)
//
//	w.Header().Set("Content-Type", "application/json")
//
//	//json.NewEncoder(w).Encode()
//}
//
//func Refresh(w http.ResponseWriter, r *http.Request) {
//	refreshToken, err := r.Cookie("refreshToken")
//	if err != nil {
//		http.Error(w, "Invalid request, missing refreshToken cookie", http.StatusBadRequest)
//		return
//	}
//
//	accessToken, err := services.Refresh(refreshToken.Value)
//	if err != nil {
//		http.Error(w, "RefreshFailed failed", http.StatusUnauthorized)
//		return
//	}
//
//	w.Header().Set("Content-Type", "application/json")
//	if err := json.NewEncoder(w).Encode(
//		map[string]string{"accessToken": accessToken}); err != nil {
//		//TODO panic
//	}
//}
