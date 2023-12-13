package auth_service

import (
	"github.com/kendoow/SportApp/backend/internal/model"
	"github.com/stretchr/testify/assert"
	"testing"
)

func TestSignUp(t *testing.T) {
	// TODO: Set env for testing db

	// Test case 1: Successful sign-up
	t.Run("SuccessfulSignUp", func(t *testing.T) {
		req := &model.UserCredits{
			Email:    "tes3112t3@example.com",
			Password: "password123",
		}

		createdUser := &model.UserAuthorized{
			Id:          1,
			Email:       "tes3112t3@example.com",
			AccessToken: "access_token",
		}

		user, refreshToken, err := SignUp(req)

		assert.Nil(t, err)
		assert.NotNil(t, user)
		assert.Equal(t, createdUser.Email, user.Email)
		assert.NotNil(t, refreshToken)
	})

}
