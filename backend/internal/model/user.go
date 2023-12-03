package model

type User struct {
	Id       int64  `db:"id"`
	Username string `db:"username"`
	Email    string `db:"email"`
	Password string `db:"password"`
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
