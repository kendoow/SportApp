package model

type User struct {
	ID       int64
	Username string
	Email    string
	Password string
}

type UserCreds struct {
	Email    string
	Password string
}

type UserInfo struct {
	Username string
	Email    string
	Password string
}

type UserAuthirized struct {
	Username    string
	Email       string
	AccessToken string
}
