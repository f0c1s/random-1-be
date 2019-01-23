# Backend challenge

## Running

1. `npm i && npm run start`
2. visit [http://localhost:8000/topActiveUsers](http://localhost:8000/topActiveUsers) or [http://localhost:8000/userInfo/1](http://localhost:8000/userInfo/1)

## note

1. I have changed endpoint users to userInfo. /users exists but just fetch the database data.
2. I am not using docker; but a local instance of postgres. Couldn't get docker to work properly on my machine. :(
3. There's a configuration in config/db.json, point to your instance and it should work just fine.
4. routes/ contain the routes for the api
5. db.js is where the postgres database config is used.
6. index.js is just the entry point.
7. app.js sets up express application.
8. Use the postman collection for quicker testing.
