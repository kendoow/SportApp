package db

import (
	"context"
	"fmt"
	"log"
	"os"
	"sync"

	"github.com/jackc/pgx/v5"
)

var (
	db     *pgx.Conn
	dbOnce sync.Once
)

func connect() (*pgx.Conn, error) {
	conn, err := pgx.Connect(context.Background(),
		fmt.Sprintf("host=%s user=%s password=%s port=%s database=%s",
			os.Getenv("DB_HOST"),
			os.Getenv("DB_USER"),
			os.Getenv("DB_PASSWORD"),
			os.Getenv("DB_PORT"),
			os.Getenv("DB_NAME")))

	if err != nil {
		return nil, fmt.Errorf("unable to connect to database: %v", err)
	}
	return conn, nil
}

func getDB() *pgx.Conn {
	dbOnce.Do(func() {
		conn, err := connect()
		if err != nil {
			log.Fatal(err)
		}
		db = conn
	})

	return db
}

// CloseDB closes the database connection.
func CloseDB() {
	if db != nil {
		db.Close(context.Background())
	}
}

// GetDB returns the database connection.
func GetDB() *pgx.Conn {
	return getDB()
}
