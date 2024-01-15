package auth_service

import (
	"context"
	"errors"
	"github.com/golang-jwt/jwt/v5"
	"github.com/kendoow/SportApp/backend/internal/repository"
	"github.com/kendoow/SportApp/backend/internal/utils"
	"log"
)

func createToken(email string, id int64) (string, error) {
	token, err := utils.CreateToken(email, id, utils.REFRESH)
	if err != nil {
		log.Println("err in creating token in utils")
		return "", nil
	}

	if err := repository.SaveToken(context.Background(), id, token); err != nil {
		log.Println("err with saving")
		return "", nil
	}

	return token, nil
}

func CreatePairTokens(email string, id int64) (string, string, error) {
	refreshToken, err := createToken(email, id)
	if err != nil {
		log.Println("err in creating refresh token")
		return "", "", err
	}

	accessToken, err := utils.CreateToken(email, id, utils.ACCESS)
	if err != nil {
		log.Println("err in create access token")
		return "", "", err
	}

	return accessToken, refreshToken, nil
}

func IsTokenExistsAndCorrect(tokenStr string, tokenId int64) error {
	currentToken, err := repository.GetTokenByUserId(context.Background(), tokenId)
	if err != nil {
		return err
	}

	token, err := jwt.Parse(currentToken, func(tokenStr *jwt.Token) (interface{}, error) {
		return utils.REFRESH, nil
	})
	if err != nil {
		return err
	}

	if !token.Valid {
		return errors.New("token is invalid")
	}

	if currentToken != tokenStr {
		return errors.New("invalidate token") //TODO create api error for what throws
		// TODO by invalidate token and then throw error by not auth user
	}

	return nil
}
