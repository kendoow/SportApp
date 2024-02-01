package db

import (
	"context"
	"fmt"
	"github.com/kendoow/SportApp/backend/config"
	"github.com/kendoow/SportApp/backend/internal/utils"
	"sync"

	"github.com/jackc/pgx/v5"
)

var (
	db     *pgx.Conn
	dbOnce sync.Once
)

func connectPostgres() (*pgx.Conn, error) {
	conn, err := pgx.Connect(context.Background(), config.GetAppConfig().PostgresURL)

	if err != nil {
		return nil, fmt.Errorf("unable to connect to database: %v", err)
	}
	return conn, nil
}

func getDBPostgres() *pgx.Conn {
	dbOnce.Do(func() {
		conn, err := connectPostgres()
		if err != nil {
			utils.Error.Fatal(err)
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
	return getDBPostgres()
}
