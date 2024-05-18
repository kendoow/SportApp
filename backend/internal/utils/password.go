package utils

import (
	"golang.org/x/crypto/bcrypt"
)

func CheckPassword(password string, hashedPassword string) error {
	return bcrypt.CompareHashAndPassword([]byte(hashedPassword), []byte(password))
}
