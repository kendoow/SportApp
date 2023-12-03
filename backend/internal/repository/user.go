package repository

import (
	"context"
	"github.com/kendoow/SportApp/backend/db"
	"github.com/kendoow/SportApp/backend/internal/model"
)

func CreateUser(ctx context.Context, user *model.UserCreds) (int64, error) {

	query := `INSERT INTO users(email, password)
		VALUES ($1, $2) RETURNING ID;`

	var userId int64

	if err := db.GetDB().QueryRow(ctx, query,
		user.Email,
		user.Password).Scan(&userId); err != nil {
		return -1, err
	}

	return userId, nil
}

func update() {

}

func DeleteUserById(ctx context.Context, id int64) error {
	query := `DELETE FROM users WHERE id = $1;`

	if err := db.GetDB().QueryRow(ctx, query, id).Scan(); err != nil {
		return err
	}

	return nil
}

func GetUserIdByEmail(ctx context.Context, email string) (int64, error) {
	query := `SELECT id
			  FROM users
			  WHERE email = $1;`

	var id int64

	if err := db.GetDB().QueryRow(ctx, query, email).Scan(&id); err != nil {
		return -1, err
	}

	return id, nil
}

func GetUserByEmail(ctx context.Context, email string) (*model.User, error) {
	query := `SELECT id, username, email, password
			  FROM users
			  WHERE email = $1;`

	var user = &model.User{}

	if err := db.GetDB().QueryRow(ctx, query, email).Scan(user); err != nil {
		return nil, err
	}

	return user, nil
}
