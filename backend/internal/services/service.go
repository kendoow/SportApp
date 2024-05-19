package services

import (
	"github.com/kendoow/SportApp/backend/internal/repository"
)

type Service struct {
	repo *repository.Repo
}

func CreateService(repo *repository.Repo) *Service {
	return &Service{
		repo: repo,
	}
}
