package repository

import (
	"context"
	"github.com/kendoow/SportApp/backend/config"
	"github.com/kendoow/SportApp/backend/db"
	"github.com/kendoow/SportApp/backend/internal/model"
	"github.com/kendoow/SportApp/backend/test/common/integration/base"
	"github.com/stretchr/testify/suite"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"testing"
	"time"
)

type TestWorkoutsRepo struct {
	base.MongoTestBase
	Repo           *Repo
	CollectionName string
}

func (suite *TestWorkoutsRepo) SetupSuite() {
	suite.BeforeMongo()

	configuration := config.GetAppConfig()
	database, err := db.InitDB(configuration)
	suite.Require().NoError(err, "Unable to create db")
	suite.Repo = CreateRepo(database)
	suite.CollectionName = config.GetAppConfig().Mongo.Workout.CollectionName
}

func (suite *TestWorkoutsRepo) TearDownSuite() {
	suite.AfterMongo()
}

func TestWorkoutRepo_Run(t *testing.T) {
	suite.Run(t, new(TestWorkoutsRepo))
}

func workoutValue() bson.D {
	return bson.D{
		{"name", "workout"},
		{"creation_date", time.RFC3339},
		{"status", "good"},
		{"workout_duration", "1 day"},
		{"tags", []string{"tag"}},
	}
}

func (suite *TestWorkoutsRepo) TestRepo_GetAllWorkouts() {
	//given
	value := workoutValue()
	suite.CreateSomething(
		context.Background(),
		suite.CollectionName,
		&value)

	//when
	cursor, err := suite.Repo.GetAllWorkout(context.Background(), &bson.M{})
	suite.Require().NoError(err, "Err then calling method GetAllWorkouts")

	var result []*model.Workout
	for cursor.Next(context.Background()) {
		var entity model.Workout
		err := cursor.Decode(&entity)
		suite.Require().NoError(err, "Can not deserialize model")
		result = append(result, &entity)
	}

	//then
	suite.Require().NotEmpty(result, "Result should not be empty")

	suite.Require().Equal(value[0].Value, result[0].Name) //TODO make equal of entities
	suite.Require().Equal(value[1].Value, result[0].CreationDate)
	suite.Require().Equal(value[2].Value, result[0].Status)
	suite.Require().Equal(value[3].Value, result[0].WorkoutDuration)
	suite.Require().Equal(value[4].Value, result[0].Tags)

	//over
	suite.CleanCollection(context.Background(), suite.CollectionName)
}

func (suite *TestWorkoutsRepo) TestRepo_CreateWorkout() {
	//given
	insertedValue := &model.Workout{
		Name:            "workout",
		CreationDate:    time.RFC3339,
		Status:          "good",
		WorkoutDuration: "1 day",
		Tags:            []string{"tag"},
	}

	//when
	err := suite.Repo.CreateWorkout(context.Background(), insertedValue)
	suite.Require().NoError(err, "Err then calling method InsertUser")

	//then
	result := suite.FindAll(context.Background(), suite.CollectionName, func(cursor *mongo.Cursor) interface{} {
		entity := model.Workout{}
		err := cursor.Decode(&entity)
		suite.Require().NoError(err, "Can not decode entity")

		return entity
	})

	suite.Require().NotEmptyf(result, "Collection should not be empty")

	suite.Require().Equal(*insertedValue, result[0]) //TODO delete after all

	//over
	suite.CleanCollection(context.Background(), suite.CollectionName)
}
