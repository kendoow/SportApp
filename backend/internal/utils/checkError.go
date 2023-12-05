package utils

func CheckError(err error, msg string) bool {
	if err != nil {
		Debug.Println("Error encountered:", msg)
		return true
	}
	return false
}
