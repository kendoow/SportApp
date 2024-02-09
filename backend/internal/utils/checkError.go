package utils

import "github.com/kendoow/SportApp/backend/internal/utils/logging"

func CheckError(err error, msg string) bool {
	if err != nil {
		logging.Debug.Println("Error encountered:", msg)
		return true
	}
	return false
}
