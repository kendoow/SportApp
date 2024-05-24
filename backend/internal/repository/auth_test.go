package repository

import (
	"context"
	"fmt"
	"github.com/kendoow/SportApp/backend/config"
	"github.com/kendoow/SportApp/backend/db"
	"github.com/kendoow/SportApp/backend/internal/model"
	"github.com/kendoow/SportApp/backend/test/common/integration/base"
	"github.com/stretchr/testify/suite"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"testing"
)

type TestAuthRepo struct {
	base.MongoTestBase
	Repo           *Repo
	CollectionName string
}

func (suite *TestAuthRepo) SetupSuite() {
	suite.BeforeMongo()

	configuration := config.GetAppConfig()
	database, err := db.InitDB(configuration)
	suite.Require().NoError(err, "Unable to create db")
	suite.Repo = CreateRepo(database)
	suite.CollectionName = config.GetAppConfig().Mongo.Auth.CollectionName
}

func (suite *TestAuthRepo) TearDownSuite() {
	suite.AfterMongo()
}

func TestAuthRepo_Run(t *testing.T) {
	suite.Run(t, new(TestAuthRepo))
}

func authValue() bson.D {
	return bson.D{
		{"phone", "+79991112233"},
	}
}

func (suite *TestAuthRepo) TestRepo_FindUserByPhone() {
	//given
	value := authValue()
	suite.CreateSomething(
		context.Background(),
		suite.CollectionName,
		&value)

	//when
	entity, err := suite.Repo.FindUserByPhone(context.Background(), fmt.Sprint(value[0].Value))
	suite.Require().NoError(err, "Err then calling method FindUserByPhone")

	//then
	suite.Require().Equal(value[0].Value, entity.Phone)
}

type UserEntity struct { //TODO create entity and models in different
	Id    string `bson:"_id"`
	Phone string `bson:"phone"`
}

func (suite *TestAuthRepo) TestRepo_InsertUser() {
	//given
	value := authValue()
	insertedValue := &model.RegisterBody{
		Phone: fmt.Sprint(value[0].Value),
	}

	//when
	id, err := suite.Repo.InsertUser(context.Background(), insertedValue)
	suite.Require().NoError(err, "Err then calling method InsertUser")

	//then
	result := suite.FindAll(context.Background(), suite.CollectionName, func(cursor *mongo.Cursor) interface{} {
		entity := UserEntity{}
		err := cursor.Decode(&entity)
		suite.Require().NoError(err, "Can not decode entity")

		return entity
	})

	expectedValue := UserEntity{
		Id:    id.Hex(),
		Phone: insertedValue.Phone,
	}

	suite.Require().NotEmptyf(result, "Collection should not be empty")

	suite.Require().Equal(expectedValue, result[0])
}

func (suite *TestAuthRepo) TestRepo_UpdateUser() {
	//given
	value := authValue()
	suite.CreateSomething(
		context.Background(),
		suite.CollectionName,
		&value)
	preparedUserOId := suite.FindAll(context.Background(), suite.CollectionName, func(cursor *mongo.Cursor) interface{} {
		entity := UserEntity{}
		err := cursor.Decode(&entity)
		suite.Require().NoError(err, "Can not decode entity")

		return entity
	})[0].(UserEntity).Id
	updates := map[string]any{
		"phone": "+79992223311",
	}
	preparedUserId, err := primitive.ObjectIDFromHex(preparedUserOId)
	suite.Require().NoError(err, "Can not create ObjectId from hex str")

	//when
	err = suite.Repo.UpdateUser(context.Background(), preparedUserId, updates)
	suite.Require().NoError(err, "Err then calling method InsertUser")

	//then
	result := suite.FindAll(context.Background(), suite.CollectionName, func(cursor *mongo.Cursor) interface{} {
		entity := UserEntity{}
		err := cursor.Decode(&entity)
		suite.Require().NoError(err, "Can not decode entity")

		return entity
	})

	expectedValue := UserEntity{
		Id:    preparedUserOId,
		Phone: updates["phone"].(string),
	}

	suite.Require().NotEmptyf(result, "Collection should not be empty")

	suite.Require().Equal(expectedValue, result[0])
}
