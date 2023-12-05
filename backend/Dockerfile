FROM golang:latest as build
WORKDIR /go/src/app
COPY . .
RUN go build ./cmd/main.go

FROM ubuntu:22.04 as production
WORKDIR /application
COPY --from=build /go/src/app/main .
CMD ["./main"]