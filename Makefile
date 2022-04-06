PATH      := $(PATH):$(PWD)/node_modules/.bin
SHELL     := env PATH=$(PATH) /bin/bash
HASH      := $(shell git rev-parse --short HEAD)
CONTAINER := subash/sms-api.subashpathak.com

dev:
	@node-dev src/server.js

build:
	docker buildx build --platform linux/amd64,linux/arm64 --push --tag $(CONTAINER):$(HASH) .
	docker buildx build --platform linux/amd64,linux/arm64 --push --tag $(CONTAINER):latest .

deploy: build
	ssh subash@subashpathak.com " \
		cd personal-server && \
		docker-compose pull --quiet sms-api && \
		docker-compose up --detach sms-api \
	"

.PHONY: dev build deploy
