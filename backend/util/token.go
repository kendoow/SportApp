package util

import (
	"fmt"
	"log"
	"os"
	"time"

	"github.com/golang-jwt/jwt/v5"
)

var (
	ACCESS  = []byte(os.Getenv("SECRET_ACCESS_TOKEN"))
	REFRESH = []byte(os.Getenv("SECRET_REFRESH_TOKEN"))
)

type UserClaims struct {
	UserId int64  `json:"id"`
	Email  string `json:"string"`
	jwt.RegisteredClaims
}

func VerifyToken(tokenString string, secret []byte) error {
	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		return secret, nil
	})

	if err != nil {
		return err
	}

	if !token.Valid {
		return fmt.Errorf("invalid token")
	}

	return nil
}

func ParseTokensId(tokenString string, secret []byte) (int64, error) {
	claims := UserClaims{}
	token, err := jwt.ParseWithClaims(tokenString, &claims, func(token *jwt.Token) (interface{}, error) {
		return secret, nil
	})

	if err != nil {
		return -1, nil
	}

	if !token.Valid {
		return -1, nil // TODO generate errors for api
	}

	return claims.UserId, nil
}

func ParseUserClaims(tokenString string, secret []byte) (*UserClaims, error) {
	claims := UserClaims{}
	token, err := jwt.ParseWithClaims(tokenString, &claims, func(token *jwt.Token) (interface{}, error) {
		return secret, nil
	})

	if err != nil {
		return nil, err
	}

	if !token.Valid {
		return nil, nil // TODO generate errors for api
	}

	return &claims, nil
}

func CreateToken(email string, id int64, secret []byte) (string, error) {
	token := jwt.NewWithClaims(jwt.SigningMethodHS256,
		jwt.MapClaims{
			"email": email,
			"id":    id,
			"exp":   time.Now().Add(time.Hour * 24).Unix(),
		})

	tokenString, err := token.SignedString(secret)
	if err != nil {
		log.Println("err in signed str?")
		log.Println(ACCESS)
		return "", err
	}

	return tokenString, nil
}
