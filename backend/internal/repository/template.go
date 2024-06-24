package repository

import (
	"context"
	"github.com/kendoow/SportApp/backend/internal/model"
	"github.com/kendoow/SportApp/backend/internal/utils"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

func (repo *Repo) GetAllTemplates(ctx context.Context, filter *bson.M) (*mongo.Cursor, error) {
	templates := repo.collections.Template

	cursor, err := templates.Find(ctx, filter)
	if err != nil {
		utils.Error.Println(err.Error())
		return nil, err
	}

	return cursor, nil
}

func (repo *Repo) CreateTemplate(ctx context.Context, createdTemplate *model.Template) (*mongo.InsertOneResult, error) {
	templates := repo.collections.Template
	templateResult, err := templates.InsertOne(ctx, createdTemplate)
	if err != nil {
		utils.Error.Println(err.Error())
		return nil, err
	}
	return templateResult, nil
}

func (repo *Repo) GetTemplateById(ctx context.Context, filter bson.D) *mongo.SingleResult {
	templates := repo.collections.Template
	result := templates.FindOne(ctx, filter)
	return result
}

func (repo *Repo) DeleteTemplateById(ctx context.Context, filter bson.D) (*mongo.DeleteResult, error) {
	templates := repo.collections.Template
	result, err := templates.DeleteOne(ctx, filter)
	if err != nil {
		utils.Error.Println(err.Error())
		return nil, err
	}
	return result, nil
}
