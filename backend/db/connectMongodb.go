package db

import (
	"context"
	"fmt"
	"github.com/kendoow/SportApp/backend/config"
	"log"
	"sync"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var (
	mongoClient *mongo.Client
	mongoOnce   sync.Once
)

func connectMongo() (*mongo.Client, error) {
	// MongoDB connection string
	//connStr := fmt.Sprintf("mongodb://%s:%s@localhost:%s",
	//	os.Getenv("DB_USER_MONGO"),
	//	os.Getenv("DB_PASSWORD_MONGO"),
	//	os.Getenv("DB_PORT_MONGO"))
	connStr := config.GetAppConfig().Mongo.URL

	clientOptions := options.Client().ApplyURI(connStr)

	client, err := mongo.Connect(context.Background(), clientOptions)
	if err != nil {
		return nil, fmt.Errorf("unable to connect to MongoDB: %v", err)
	}

	err = client.Ping(context.Background(), nil)
	if err != nil {
		return nil, fmt.Errorf("unable to ping MongoDB: %v", err)
	}

	return client, nil
}

func getMongoClient() *mongo.Client {
	mongoOnce.Do(func() {
		client, err := connectMongo()
		if err != nil {
			log.Fatal(err)
		}
		mongoClient = client
	})

	return mongoClient
}

// CloseMongoDB closes the MongoDB connection.
func CloseMongoDB() {
	if mongoClient != nil {
		if err := mongoClient.Disconnect(context.Background()); err != nil {
			log.Println("Error disconnecting from MongoDB:", err)
		}
	}
}
