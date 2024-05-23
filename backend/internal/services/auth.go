package services

import (
	"context"
	"github.com/kendoow/SportApp/backend/internal/model"
	"log"
)

func (service *Service) SignUp(req *model.RegisterBody) (any, error) {
	repo := service.repo
	user, err := repo.FindUserByPhone(context.Background(), req.Phone)

	if err != nil {
		log.Println("failed when getting user from db")
		return "", err
	}

	if user != nil {
		log.Println("Phone number already in use")
		return "", err
	}

	// create new user, everything cool
	insertedId, err := repo.InsertUser(context.Background(), req)

	if err != nil {
		log.Println("Error when inserting user in db")
		return "", err
	}

	return insertedId, nil
}

//func (service *Service) Login(req *model.RegisterBody) (*model.UserAuthorized, string, error) {
//	user, err := repository.GetUserByEmail(context.Background(), req.Email)
//	if err != nil {
//		log.Println(err.Error())
//		log.Println("failed when getting user from db")
//		return nil, "", err
//	}
//
//	if err := utils.CheckPassword(req.Password, user.Password); err != nil {
//		log.Println("incorrect password")
//		return nil, "", err
//	}
//
//	accessToken, refreshToken, err := CreatePairTokens(user.Email, user.Id) //TODO do upsert
//	if err != nil {
//		log.Println("failed in creating tokens")
//		return nil, "", err
//	}
//
//	log.Println(accessToken, "<--->", refreshToken)
//
//	return &model.UserAuthorized{
//		user.Id,
//		user.Username,
//		user.Email,
//		accessToken,
//	}, refreshToken, nil
//}
