include .env

postgres:
	docker exec -it postgres-sp psql "postgresql://${DB_USER}:${DB_PASSWORD}@localhost:${DB_PORT}/${DB_NAME}"

migrate:
	migrate -path migrations -database "postgresql://${DB_USER}:${DB_PASSWORD}@localhost:${DB_PORT}/${DB_NAME}?sslmode=disable" -verbose ${mode}