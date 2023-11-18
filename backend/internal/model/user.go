package model

type User struct {
	ID       int64
	Username string
	Email    string
	Password string
}

type CreateUser struct {
	Email    string
	Password string
}
