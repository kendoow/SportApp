package repository

//import (
//	"context"
//	"github.com/kendoow/SportApp/backend/config"
//	"github.com/kendoow/SportApp/backend/internal/utils"
//	"go.mongodb.org/mongo-driver/bson"
//	"go.mongodb.org/mongo-driver/mongo"
//)
//
//var (
//	userCollection = mongoDB.Database(config.GetAppConfig().Mongo.DBName).Collection(config.GetAppConfig().Mongo.Template.CollectionName)
//)
//
//func GetAllExercises(ctx context.Context) (*mongo.Cursor, error) {
//	filter := bson.M{}
//
//	cursor, err := exerciseCollection.Find(ctx, filter)
//	if err != nil {
//		utils.Error.Println(err.Error())
//		return nil, err
//	}
//
//	return cursor, nil
//}
