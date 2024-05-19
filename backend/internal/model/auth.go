package model

type RegisterBody struct {
	Phone string `json:"phone"`
}

type VerifyOTPSchema struct {
	Phone string `json:"phone"`
	Otp   string `json:"otp"`
}
