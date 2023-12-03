package services

import (
	"context"
	"github.com/kendoow/SportApp/backend/internal/model"
	"github.com/kendoow/SportApp/backend/internal/repository"
	"github.com/kendoow/SportApp/backend/util"
	"log"
)

func SignUp(req *model.UserCreds) (*model.UserAuthirized, string, error) {

	hashedPassword, err := util.HashPassword(req.Password)
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

	return &model.UserAuthirized{
		"",
		req.Email,
		accessToken,
	}, refreshToken, nil
}

func Login(req *model.UserCreds) (*model.UserAuthirized, string, error) {
	user, err := repository.GetUserByEmail(context.Background(), req.Email)
	if err != nil {
		return nil, "", err
	}

	if err := util.CheckPassword(req.Password, user.Password); err != nil {
		return nil, "", err
	}

	accessToken, refreshToken, err := CreatePairTokens(user.Email, user.ID) //TODO do upsert
	if err != nil {
		return nil, "", err
	}

	return &model.UserAuthirized{
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
	claims, err := util.ParseUserClaims(refreshToken, util.REFRESH)
	if err != nil {
		return "", err
	}

	if err := IsTokenExistsAndCorrect(refreshToken, claims.UserId); err != nil {
		return "", err
	}

	accessToken, err := util.CreateToken(claims.Email, claims.UserId, util.ACCESS)
	if err != nil {
		return "", nil
	}

	return accessToken, nil
}

func Reset() {

}
