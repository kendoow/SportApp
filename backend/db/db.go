package db

import (
	"github.com/kendoow/SportApp/backend/config"
	"github.com/kendoow/SportApp/backend/db/mongo"
)

func InitDB(config *config.Config) (*mongo.DB, error) {
	mongoDb := &mongo.DB{}

	if err := mongoDb.Init(config); err != nil {
		return nil, err
	}

	return mongoDb, nil
}
