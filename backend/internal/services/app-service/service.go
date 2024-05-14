package app_service

import repository "github.com/kendoow/SportApp/backend/internal/repository/workout"

type Service struct {
	repo *repository.Repo
}

func CreateService(repo *repository.Repo) *Service {
	return &Service{
		repo: repo,
	}
}
