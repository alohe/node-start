# ⚡️Node-start 
## A simple Node.js boilerplate for web applications

This is a boilerplate for Node.js web applications. It is based on the [Express](http://expressjs.com/) framework and uses [EJS](http://www.embeddedjs.com/) as the templating engine. It also uses [MySQL](https://www.mysql.com/) as the database. It is a good starting point for any web application.

## Features

✅ Easy to use and understand <br />
✅ Uses EJS as the templating engine <br />
✅ Uses MySQL as the database <br />
✅ Uses JSON Web Tokens for authentication <br />
✅ Uses Express Sessions for authentication <br />
✅ Uses Bcrypt for password hashing <br />
✅ Uses dotenv for environment variables <br />
✅ Uses cookie-parser for cookies <br />
✅ Uses body-parser for parsing requests <br />

## Installation

1. Clone the repository
2. Run `npm install` to install the dependencies
3. Run `npm run update` to update the dependencies
4. Create a `.env` file in the root directory and add the following environment variables:
   - `PORT` - The port number for the server to listen on
   - `DB_HOST` - The host name of the database
   - `DB_USER` - The username of the database
   - `DB_PASSWORD` - The password of the database
   - `DB_NAME` - The name of the database
   - `SESSION_SECRET` - The secret for the session
   - `JWT_SECRET` - The secret for the JSON Web Token

### Example .env file 
``` bash
DB_USER=
DB_HOST=
DB_PASS=
DB_NAME=
DB_PORT=
SESSION_SECRET=secret
JWT_SECRET=jtw_secret
PORT=3000
JWT_EXPIRES_IN=1h
JWT_COOKIE_EXPIRES_IN=1h
COOKIE_EXPIRES_IN=1h
```

## Usage

1. Run `npm start` to start the server in production mode
2. Run `npm run dev` to start the server in development mode
3. Navigate to `localhost:3000` to view the application


## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Please make sure to update tests as appropriate.

#

Feel free to reach out to me [on Twitter](https://twitter.com/alemalohe) if you have any questions or feedback! 