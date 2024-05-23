package workout

import (
	"context"
	"github.com/kendoow/SportApp/backend/config"
	"github.com/kendoow/SportApp/backend/db"
	"github.com/kendoow/SportApp/backend/internal/model/workout"
	"github.com/kendoow/SportApp/backend/test/common/integration/base"
	"github.com/stretchr/testify/suite"
	"go.mongodb.org/mongo-driver/bson"
	"testing"
	"time"
)

type TestTemplateRepo struct {
	base.MongoTestBase
	Repo           *Repo
	CollectionName string
}

func (suite *TestTemplateRepo) SetupSuite() {
	suite.BeforeMongo()

	configuration := config.GetAppConfig()
	database, err := db.InitDB(configuration)
	suite.Require().NoError(err, "Unable to create db")
	suite.Repo = CreateRepo(database)
	suite.CollectionName = config.GetAppConfig().Mongo.Template.CollectionName
}

func (suite *TestTemplateRepo) TearDownSuite() {
	suite.AfterMongo()
}

func TestTemplateRepo_Run(t *testing.T) {
	suite.Run(t, new(TestTemplateRepo))
}

// In this method we use hack converting time to string
// in go time.Now() method returns time with precision of seconds like .000000
// mongo returns precisions like .000 - to short for us
func templateValue() bson.D {
	return bson.D{
		{"name", "template"},
		{"status", "good"},
		{"last_usage", time.Now().UTC().Format(time.RFC3339)},
		{"exercises", exercises()},
	}
}

func exercises() []workout.ExerciseInfo {
	return []workout.ExerciseInfo{
		{Name: "excercise", Repetition: []int32{5, 5, 5, 5}},
	}
}

func (suite *TestTemplateRepo) TestRepo_GetAllTemplates() {
	//given
	value := templateValue()
	suite.CreateSomething(
		context.Background(),
		suite.CollectionName,
		&value)

	//when
	cursor, err := suite.Repo.GetAllTemplates(context.Background(), &bson.M{})
	suite.Require().NoError(err, "Err then calling method GetAllTemplates")

	var result []*workout.WorkoutTempalte
	for cursor.Next(context.Background()) {
		var entity workout.WorkoutTempalte
		err := cursor.Decode(&entity)
		suite.Require().NoError(err, "Can not deserialize model")
		result = append(result, &entity)
	}

	//then
	suite.Require().NotEmpty(result, "Result should not be empty")

	suite.Require().Equal(value[0].Value, result[0].Name) //TODO make equal of entities
	suite.Require().Equal(value[1].Value, result[0].Status)
	suite.Require().Equal(value[2].Value, result[0].LastUsage.Format(time.RFC3339))
	suite.Require().Equal(value[3].Value, result[0].Exercises)
}
