package auth_service

import (
	"context"
	"github.com/kendoow/SportApp/backend/internal/model"
	"github.com/kendoow/SportApp/backend/internal/repository"
	"github.com/kendoow/SportApp/backend/internal/utils"
	"log"
)

func SignUp(req *model.UserCredits) (*model.UserAuthorized, string, error) {

	hashedPassword, err := utils.HashPassword(req.Password)
	if err != nil {
		log.Println("error in hashing password")
		return nil, "", err
	}
	req.Password = hashedPassword

	id, err := repository.CreateUser(context.Background(), req)
	if err != nil {
		log.Println("error in creating user")
		return nil, "", err
	}

	accessToken, refreshToken, err := CreatePairTokens(req.Email, id)

	if err != nil {
		log.Panicln("error in create of pairs")
		return nil, "", err
	}

	return &model.UserAuthorized{
		id,
		"",
		req.Email,
		accessToken,
	}, refreshToken, nil
}

func Login(req *model.UserCredits) (*model.UserAuthorized, string, error) {
	user, err := repository.GetUserByEmail(context.Background(), req.Email)
	if err != nil {
		log.Println(err.Error())
		log.Println("failed when getting user from db")
		return nil, "", err
	}

	if err := utils.CheckPassword(req.Password, user.Password); err != nil {
		log.Println("incorrect password")
		return nil, "", err
	}

	accessToken, refreshToken, err := CreatePairTokens(user.Email, user.Id) //TODO do upsert
	if err != nil {
		log.Println("failed in creating tokens")
		return nil, "", err
	}

	log.Println(accessToken, "<--->", refreshToken)

	return &model.UserAuthorized{
		user.Id,
		user.Username,
		user.Email,
		accessToken,
	}, refreshToken, nil
}

func Logout(token string) error {
	if err := repository.DeleteToken(context.Background(), token); err != nil {
		return err
	}

	return nil
}

func Refresh(refreshToken string) (string, error) {
	claims, err := utils.ParseUserClaims(refreshToken, utils.REFRESH)
	if err != nil {
		return "", err
	}

	if err := IsTokenExistsAndCorrect(refreshToken, claims.UserId); err != nil {
		return "", err
	}

	accessToken, err := utils.CreateToken(claims.Email, claims.UserId, utils.ACCESS)
	if err != nil {
		return "", nil
	}

	return accessToken, nil
}

func Reset() {

}
