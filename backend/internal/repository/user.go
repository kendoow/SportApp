package repository

import "github.com/kendoow/SportApp/backend/internal/model"

func CreateUser(user *model.User, db *Database) (model.User, error) {

	query := `INSERT INTO users(username, email, password)
		VALUES ($1, $2, $3) RETURNING ID`

	err := db.QueryRowContext()

	user, nil
}

func UpdateUser() {

}

func DeleteUser() {

}