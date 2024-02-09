package app_service

import (
	"context"
	"github.com/kendoow/SportApp/backend/internal/model"
	repository "github.com/kendoow/SportApp/backend/internal/repository/workout"
	"github.com/kendoow/SportApp/backend/internal/utils/logging"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

func GetAllTemplates( /*params*/ ) (*[]*model.Template, error) {
	cursor, err := repository.GetAllTemplates(context.TODO(), &bson.M{})
	if err != nil {
		return nil, err
	}
	defer cursor.Close(context.TODO())
	var templates []*model.Template

	for cursor.Next(context.TODO()) {
		var elem model.Template

		err := cursor.Decode(&elem)
		if err != nil {
			logging.Error.Println(err.Error())
		}

		templates = append(templates, &elem)
	}

	if err := cursor.Err(); err != nil {
		logging.Error.Println(err.Error())
		return nil, err
	}

	return &templates, nil
}

func CreateTemplate(createdTemplate *model.Template) (interface{}, error) {
	newTemplate, err := repository.CreateTemplate(context.TODO(), createdTemplate)
	if err != nil {
		return "", err // TODO: rewrite empty string
	}
	return newTemplate.InsertedID, nil
}

func GetTemplateById(ctx context.Context, Id string) (*model.Template, error) {

	id, err := primitive.ObjectIDFromHex(Id)
	if err != nil {
		logging.Error.Println(err)
		return nil, err
	}

	filter := bson.D{{"_id", id}}
	result := repository.GetTemplateById(ctx, filter)
	var elem model.Template

	err = result.Decode(&elem)
	if err != nil {
		logging.Error.Println(err.Error())
	}
	return &elem, nil
}
