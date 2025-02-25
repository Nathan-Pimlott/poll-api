# poll-api

API to serve the Poll UI project.

### Installation

1. Install dependencies

```
npm install
```

### Run local dev server

1. Follow "Installation" to install dependencies

2. Run dev server

```
npm run dev
```

### Hitting server local

1. Follow "Run local dev server".

2. GET localhost:3000/health. You should get 401 status.

3. This app has some basic auth middleware, add `token` as a header to your request with any value.

4. You should now get a 200 status back.

### Setting up local DB

1. Run the commands in `docs/local-setup.sql`. This will create a MySQL database, user & permissions, all tables needed and some mock data.

2. Create a .env file in the root and add the below values. These can be changed to whatever you want, just make sure to update the `docs/local-setup.sql` file as well

```
DB_HOST=localhost
DB_USER=poll-admin
DB_DATABASE=poll
DB_PORT=3306
DB_PASSWORD=test123
```

3. Once you've done this, follow "Hitting local server" to get the server running, then you can GET localhost:3000/polls with a header `token` with any value and should get the mock data back.

### Creating polls using API

You can use the following cURL request format to create a new poll through the API.

```
curl --location 'http://localhost:3000/poll' \
--header 'token: hello world' \
--header 'Content-Type: application/json' \
--data '{
    "title": "Who will win the FA Cup?",
    "options": [
        "Manchester City",
        "Arsenal",
        "Chelsea",
        "Manchester United",
        "Tottenham",
        "Nottingham Forest",
        "Newcastle United"
    ]
}'
```
