package base

import (
	"context"
	"github.com/kendoow/SportApp/backend/config"
	"github.com/kendoow/SportApp/backend/test/common/integration/containers"
	"github.com/stretchr/testify/suite"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type MongoTestBase struct {
	suite.Suite
	container *containers.MongoTestContainer
	db        *mongo.Database
}

func (base *MongoTestBase) BeforeMongo() {
	ctx := context.Background()

	container, err := containers.CreateMongoTestContainer(ctx)
	base.Require().NoError(err, "Unable to create mongo test container")

	base.container = container

	connStr := base.container.GetURL()

	clientOptions := options.Client().ApplyURI(connStr)

	clientMongo, err := mongo.Connect(ctx, clientOptions)
	base.Require().NoError(err, "Unable to connect to mongo")

	err = clientMongo.Ping(ctx, nil)
	base.Require().NoError(err, "Unable to ping mongo")

	base.db = clientMongo.Database(container.Config.DatabaseName)

	configuration := config.GetAppConfig()
	configuration.Mongo.URL = base.container.GetURL()
	configuration.Mongo.DBName = base.container.Config.DatabaseName
}

func (base *MongoTestBase) AfterMongo() {
	ctx := context.Background()

	base.Require().NoError(base.container.Terminate(ctx))
}

type EntityDecoder = func(cursor *mongo.Cursor) interface{}

func (base *MongoTestBase) FindAll(ctx context.Context, collectionName string,
	decoder EntityDecoder) []interface{} {
	cursor, err := base.db.Collection(collectionName).Find(ctx, bson.D{})
	base.Require().NoError(err, "Unable to find all documents")

	var result []interface{}

	for cursor.Next(ctx) {
		model := decoder(cursor)
		result = append(result, model)
	}

	return result
}

func (base *MongoTestBase) CreateSomething(ctx context.Context, collectionName string, document *bson.D) {
	_, err := base.db.Collection(collectionName).InsertOne(ctx, document)
	base.Require().NoError(err, "Inserting failed")
}

func (base *MongoTestBase) CleanCollection(ctx context.Context, collectionName string) {
	_, err := base.db.Collection(collectionName).DeleteMany(ctx, bson.D{})
	base.Require().NoError(err, "DeleteAll failed")
}
