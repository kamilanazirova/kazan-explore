#!/bin/sh

docker stop ms-mongo
docker volume remove ms_volume
docker volume create ms_volume
docker run --rm -v ms_volume:/data/db --name ms-mongo -p 27017:27017 -d mongo:8.0.3
