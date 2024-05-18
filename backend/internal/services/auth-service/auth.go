package auth_service

import (
	"context"
	"github.com/kendoow/SportApp/backend/internal/model"
	"github.com/kendoow/SportApp/backend/internal/repository"
	"github.com/kendoow/SportApp/backend/internal/utils"
	"log"
)

func SignUp(req *model.RegisterBody) (any, error) { // TODO: delete any type
	user, err := repository.FindUserByPhone(context.Background(), req.Phone)
	if err != nil {
		log.Println("failed when getting user from db")
		return "", err
	}

	if user != nil {
		log.Println("Phone number already in use")
		return "", err
	}

	// create new user, everything cool
	insertedId, err := repository.InsertUser(context.Background(), user)

	if err != nil {
		log.Println("Error when inserting user in db")
		return "", err
	}

	return insertedId, nil
}

func VerifyOTP(req *model.RegisterBody) (any, error) { // TODO: delete any type
	user, err := repository.FindUserByPhone(context.Background(), req.Phone)
	if err != nil {
		log.Println("failed when getting user from db")
		return "", err
	}

	if user == nil {
		log.Println("Phone number not exists")
		return "", err
	}

	return user, nil
}

//func Login(req *model.UserCredits) (*model.UserAuthorized, string, error) {
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
