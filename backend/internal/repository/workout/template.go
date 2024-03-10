package workout

import (
	"context"
	"github.com/kendoow/SportApp/backend/config"
	"github.com/kendoow/SportApp/backend/internal/model"
	"github.com/kendoow/SportApp/backend/internal/utils"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

var (
	templateCollection = mongoDB.Database(config.GetAppConfig().Mongo.DBName).Collection(config.GetAppConfig().Mongo.Template.CollectionName)
)

func GetAllTemplates(ctx context.Context, filter *bson.M) (*mongo.Cursor, error) {

	cursor, err := templateCollection.Find(ctx, filter)
	if err != nil {
		utils.Error.Println(err.Error())
		return nil, err
	}

	return cursor, nil
}

func CreateTemplate(ctx context.Context, createdTemplate *model.Template) (*mongo.InsertOneResult, error) {
	templateResult, err := templateCollection.InsertOne(ctx, createdTemplate)
	if err != nil {
		utils.Error.Println(err.Error())
		return nil, err
	}
	return templateResult, nil
}

func GetTemplateById(ctx context.Context, filter bson.D) *mongo.SingleResult {
	result := templateCollection.FindOne(ctx, filter)
	return result
}
