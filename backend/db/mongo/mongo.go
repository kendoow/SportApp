package mongo

import (
	"context"
	"fmt"
	"github.com/kendoow/SportApp/backend/config"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"log"
)

type DB struct {
	client *mongo.Client
}

func (db *DB) Init(config *config.Config) error {
	ctx := context.Background()
	connStr := config.Mongo.URL

	clientOptions := options.Client().ApplyURI(connStr)

	client, err := mongo.Connect(context.Background(), clientOptions)
	if err != nil {
		return fmt.Errorf("unable to connect to MongoDB: %v", err)
	}

	err = client.Ping(ctx, nil)
	if err != nil {
		return fmt.Errorf("unable to ping MongoDB: %v", err)
	}

	db.client = client
	return nil
}

func (db *DB) GetClient() *mongo.Client {
	return db.client
}

// Shutdown closes the MongoDB connection.
func (db *DB) Shutdown() {
	if db != nil {
		ctx := context.Background()
		if err := db.client.Disconnect(ctx); err != nil {
			log.Println("Error disconnecting from MongoDB:", err)
		}
	}
}
