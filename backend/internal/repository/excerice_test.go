package repository

import (
	"context"
	"github.com/kendoow/SportApp/backend/config"
	"github.com/kendoow/SportApp/backend/db"
	"github.com/kendoow/SportApp/backend/internal/model"
	"github.com/kendoow/SportApp/backend/test/common/integration/base"
	"github.com/stretchr/testify/suite"
	"go.mongodb.org/mongo-driver/bson"
	"testing"
)

type TestExerciseRepo struct {
	base.MongoTestBase
	Repo           *Repo
	CollectionName string
}

func (suite *TestExerciseRepo) SetupSuite() {
	suite.BeforeMongo()

	configuration := config.GetAppConfig()
	database, err := db.InitDB(configuration)
	suite.Require().NoError(err, "Unable to create db")
	suite.Repo = CreateRepo(database)
	suite.CollectionName = config.GetAppConfig().Mongo.Exercise.CollectionName
}

func (suite *TestExerciseRepo) TearDownSuite() {
	suite.AfterMongo()
}

func TestExerciseRepo_Run(t *testing.T) {
	suite.Run(t, new(TestExerciseRepo))
}

func exerciseValue() bson.D {
	return bson.D{
		{"name", "exercise"},
		{"repetition", []int32{5, 5, 5, 5}},
	}
}

func (suite *TestExerciseRepo) TestRepo_GetAllExercises() {
	//given
	value := exerciseValue()
	suite.CreateSomething(
		context.Background(),
		suite.CollectionName,
		&value)

	//when
	cursor, err := suite.Repo.GetAllExercises(context.Background())
	suite.Require().NoError(err, "Err then calling method GetAllExercises")

	var result []*model.ExerciseInfo
	for cursor.Next(context.Background()) {
		var entity model.ExerciseInfo
		err := cursor.Decode(&entity)
		suite.Require().NoError(err, "Can not deserialize model")
		result = append(result, &entity)
	}

	//then
	suite.Require().NotEmpty(result, "Result should not be empty")

	suite.Require().Equal(value[0].Value, result[0].Name)
	suite.Require().Equal(value[1].Value, result[0].Repetition)

	//over
	suite.CleanCollection(context.Background(), suite.CollectionName)
}
