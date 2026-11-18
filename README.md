# Temp-backend

Express API for a formal letter generation app. It handles user signup and login, and turns form fields (date, sender, recipient, subject) into a PDF via an EJS template and Puppeteer.

The matching React app, and a copy of this API, live in [Template](https://github.com/clintunn/Template).

## Tech stack

- Node.js, Express
- MongoDB with Mongoose
- bcrypt and validator for user credentials
- EJS and Puppeteer for HTML-to-PDF

## Features

- `POST /users/signup` — create a user (`name`, `email`, `password`); emails must be unique
- `POST /users/login` — authenticate with email and password
- `POST /generate-letter` — body `{ "userInputs": { "date", "sender", "recipient", "subject" } }`; responds with an `application/pdf` file

The server listens on port **3001**. CORS is enabled. Puppeteer will also need a Chromium download the first time it runs.

## Run locally

```bash
npm install
cp .env.example .env
# set DB_STRING to your MongoDB connection string
npm run dev    # nodemon
# or
npm start      # node app.js
```

`.env.example` lists `DB_STRING`. `connection.js` currently uses a hardcoded MongoDB URL instead of that variable — point it at `process.env.DB_STRING` before running against your own database.

The React client in the Template repo expects this API at `http://localhost:3001`.

## Project structure

```
app.js                         # Express app, letter route, HTTP server
connection.js                  # MongoDB connection
models/User.js
routes/userRoutes.js           # /users/signup and /users/login
templates/letter_template.ejs  # PDF letter layout
```

Built by Clinton Nkamigbo · https://clinton-nkamigbo.vercel.app
