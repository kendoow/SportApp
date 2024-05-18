package repository

import (
	"context"
	"github.com/kendoow/SportApp/backend/config"
	"github.com/kendoow/SportApp/backend/internal/model"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

var (
	authCollection = mongoDB.Database(config.GetAppConfig().Mongo.DBName).Collection(config.GetAppConfig().Mongo.Auth.CollectionName)
)

func FindUserByPhone(ctx context.Context, phone string) (*model.RegisterBody, error) {
	filter := bson.M{"phone": phone}
	var result model.RegisterBody

	// Find the user with the given phone number
	err := authCollection.FindOne(ctx, filter).Decode(&result)

	if err != nil {
		if err == mongo.ErrNoDocuments {
			// If the error is ErrNoDocuments, it means no user was found
			return nil, nil
		}
		// Handle other potential errors TODO: add logger
		return nil, err
	}

	return &result, nil
}

func InsertUser(ctx context.Context, user *model.RegisterBody) (any, error) {

	// Insert the user into the collection
	result, err := authCollection.InsertOne(ctx, user)
	return result.InsertedID, err
}

func UpdateUser(ctx context.Context, userID primitive.ObjectID, updatedFields map[string]any) error {
	filter := bson.M{"_id": userID}
	update := bson.M{"$set": updatedFields}
	_, err := authCollection.UpdateOne(ctx, filter, update)
	return err
}
