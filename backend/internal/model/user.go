package model

import "go.mongodb.org/mongo-driver/bson/primitive"

type User struct {
	ID    primitive.ObjectID `json:"id" bson:"_id"`
	Name  string             `json:"name"`
	Phone string             `json:"phone"`
	Otp   string             `json:"otp,omitempty"`
}

type UserAuthorized struct {
	Id          int64  `json:"id"`
	Username    string `json:"username"`
	Email       string `json:"email"`
	AccessToken string `json:"accessToken"`
}
