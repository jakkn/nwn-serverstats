# nwn-serverstats

Node.js web server using Express and Chart.js. Hot reloading for devserver using webpack and react-hot-loader

## Run
```
docker-compose up -d
xdg-open localhost:3000
```

Note: -d in the above command is required as a bug workaround in docker-compose, sauce: https://github.com/docker/compose/issues/2338.

## Build
`docker-compose up` builds the image the first time. To rebuild run
```
docker-compose build --no-cache
```
