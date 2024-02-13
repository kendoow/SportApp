package app_service

import (
	"context"
	"github.com/stretchr/testify/suite"
	"net/http/httptest"
	"time"
)

type TestSuite struct {
	suite.Suite
	mongoContainer *MongoContainer
	server         *httptest.Server
}

func (s *TestSuite) SetupSuite() {
	ctx, ctxCancel := context.WithTimeout(context.Background(), 30*time.Second)
	defer ctxCancel()

	mongoContainer, err := NewMongoContainer(ctx)
	s.Require().NoError(err)

	s.mongoContainer = mongoContainer

}
