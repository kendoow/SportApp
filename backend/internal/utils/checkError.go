package utils

import "log"

func CheckError(err error, msg string, logger log.Logger) bool {
	if err != nil {
		logger.Println("Error encountered:", msg)
		return true
	}
	return false
}
