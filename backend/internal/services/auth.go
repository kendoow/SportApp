package services

import (
	"context"
	"github.com/kendoow/SportApp/backend/internal/model"
	"github.com/kendoow/SportApp/backend/internal/repository"
	"github.com/kendoow/SportApp/backend/util"
)

func SignUp(req *model.UserCreds) (*model.UserAuthirized, string, error) {

	hashedPassword, err := util.HashPassword(req.Password)
	if err != nil {
		return nil, "", err
	}
	req.Password = hashedPassword

	id, err := repository.CreateUser(context.Background(), req)
	if err != nil {
		return nil, "", err
	}

	accessToken, err := createToken(req.Email, id, ACCESS)
	if err != nil {
		return nil, "", err
	}
	refreshToken, err := createToken(req.Email, id, REFRESH)
	if err != nil {
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

	accessToken, err := createToken(req.Email, user.ID, ACCESS)
	if err != nil {
		return nil, "", err
	}
	refreshToken, err := createToken(req.Email, user.ID, REFRESH)
	if err != nil {
		return nil, "", err
	}

	return &model.UserAuthirized{
		user.Username,
		user.Email,
		accessToken,
	}, refreshToken, nil
}

//func Logout(token string) {
//
//}
//
//func Refresh() {
//
//}
//
//func Reset() {
//
//}
