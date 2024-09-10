# to run project in production run
docker build -t admission-usc .
docker run -p 8080:80 admission-usc
# to run in developement run
docker build -f Dockerfile.dev -t admission-usc .
docker run -p 5173:5173 -v "${PWD}:/app" -v /app/node_modules admission-usc