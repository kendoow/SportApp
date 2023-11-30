package services

import (
	"context"
	"github.com/kendoow/SportApp/backend/internal/repository"
	"github.com/kendoow/SportApp/backend/util"
)

func createToken(email string, id int64) (string, error) {
	token, err := util.CreateToken(email, id, util.REFRESH)
	if err != nil {
		return "", nil
	}

	if err := repository.SaveToken(context.Background(), id, token); err != nil {
		return "", nil
	}

	return token, nil
}

func CreatePairTokens(email string, id int64) (string, string, error) {
	refreshToken, err := createToken(email, id)
	if err != nil {
		return "", "", err
	}

	accessToken, err := util.CreateToken(email, id, util.ACCESS)
	if err != nil {
		return "", "", err
	}

	return accessToken, refreshToken, nil
}
