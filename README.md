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

2. GET localhost:3000/polls. You should get 401 status.

3. This app has some basic auth middleware, add `token` as a header to your request with any value.

4. You should now get an array of available polls. This will be an empty array if the database has not been setup/populated.
