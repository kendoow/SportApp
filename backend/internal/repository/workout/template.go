package workout

import (
	"context"
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
