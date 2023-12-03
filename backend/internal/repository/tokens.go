package repository

import (
	"context"
	"github.com/kendoow/SportApp/backend/db"
	"log"
)

func SaveToken(ctx context.Context, id int64, rToken string) error {
	query := `INSERT INTO tokens(id, token) 
		VALUES ($1, $2)
		ON CONFLICT ("id")
		DO
			UPDATE SET token = EXCLUDED.token;`

	_, err := db.GetDB().Exec(ctx, query, id, rToken)
	if err != nil {
		log.Print("Error in token repo with saving: ", err.Error())
		return err
	}

	return nil
}

func DeleteToken(ctx context.Context, rToken string) error {
	query := `DELETE FROM tokens
			WHERE token = $1;`

	_, err := db.GetDB().Exec(ctx, query, rToken)
	if err != nil {
		log.Println("Error in deleting token: ", err.Error())
		return err
	}

	return nil
}

func GetTokenByUserId(ctx context.Context, id int64) (string, error) {
	query := `SELECT token 
			  FROM tokens
			  WHERE id = $1;`

	var token string

	if err := db.GetDB().QueryRow(ctx, query, id).Scan(&token); err != nil {
		return "", err
	}

	return token, nil
}

func GetUserIdByToken(ctx context.Context, token string) (int64, error) {
	query := `SELECT id
			  FROM tokens
			  WHERE token = $1`

	var id int64

	if err := db.GetDB().QueryRow(ctx, query, token).Scan(&id); err != nil {
		return -1, err
	}

	return id, nil
}

func UpdateTokenByUserId(ctx context.Context, id int64, refreshToken string) error {
	query := `UPDATE tokens 
			  SET token = $1
			  WHERE id = $2`

	if err := db.GetDB().QueryRow(ctx, query,
		refreshToken,
		id).Scan(); err != nil {
		return err
	}

	return nil
}
