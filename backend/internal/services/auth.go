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

func (service *Service) Login(req *model.RegisterBody) (any, error) {
	repo := service.repo
	user, err := repo.FindUserByPhone(context.Background(), req.Phone)

	if err != nil {
		log.Println("failed when getting user from db")
		return "", err
	}

	if user == nil {
		log.Println("Phone number not exists")
		return "", err
	}

	//otp := utils.GenerateRandomNumber()
	// save otp in database

	//repo.UpdateUser(context.Background(), user._id, map[string]any{
	//	"otp": otp,
	//})

	if err != nil {
		log.Println("Error when inserting user in db")
		return "", err
	}

	return 1, nil
}
