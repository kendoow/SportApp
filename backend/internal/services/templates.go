package services

import (
	"context"
	"github.com/kendoow/SportApp/backend/internal/model"
	"github.com/kendoow/SportApp/backend/internal/utils"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

func (service *Service) GetAllTemplates( /*params*/ ) (*[]*model.Template, error) {
	repo := service.repo

	cursor, err := repo.GetAllTemplates(context.TODO(), &bson.M{})

	if err != nil {
		return nil, err
	}

	defer cursor.Close(context.TODO())
	var templates []*model.Template

	for cursor.Next(context.TODO()) {
		var elem model.Template

		err := cursor.Decode(&elem)
		if err != nil {
			utils.Error.Println(err.Error())
		}

		templates = append(templates, &elem)
	}

	if err := cursor.Err(); err != nil {
		utils.Error.Println(err.Error())
		return nil, err
	}

	return &templates, nil
}

func (service *Service) CreateTemplate(createdTemplate *model.Template) (interface{}, error) {
	repo := service.repo
	newTemplate, err := repo.CreateTemplate(context.TODO(), createdTemplate)
	if err != nil {
		return "", err // TODO: rewrite empty string
	}
	return newTemplate.InsertedID, nil
}

func (service *Service) GetTemplateById(ctx context.Context, Id string) (*model.Template, error) {
	repo := service.repo
	id, err := primitive.ObjectIDFromHex(Id)

	if err != nil {
		utils.Error.Println(err)
		return nil, err
	}

	filter := bson.D{{"_id", id}}
	result := repo.GetTemplateById(ctx, filter)
	var elem model.Template

	err = result.Decode(&elem)
	if err != nil {
		utils.Error.Println(err.Error())
	}
	return &elem, nil
}

func (service *Service) DeleteTemplateById(ctx context.Context, Id string) error {
	repo := service.repo

	id, err := primitive.ObjectIDFromHex(Id)

	if err != nil {
		utils.Error.Println(err)
		return err
	}

	filter := bson.D{{"_id", id}}
	result, err := repo.DeleteTemplateById(ctx, filter)

	if err != nil {
		utils.Error.Println(err.Error())
	}

	utils.Info.Println(result)

	return nil
}
