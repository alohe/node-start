const express = require("express");
const app = express();
const session = require("express-session");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const multer = require("multer"); // file upload middleware
const path = require("path"); // used to get the file extension of the uploaded file
const jwt = require("jsonwebtoken"); // used to sign and verify the jwt token

// 📚 import the database connection from dbcon.js
// const conn = require("./dbcon");

// this is used to read the .env file
require("dotenv").config();

// set the directory where multer will store the files that are uploaded to the server
const storage = multer.diskStorage({
  destination: "public/uploads/",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname) // this will create a unique name for the file that is being uploaded
    );
  },
});

// multer middleware
var upload = multer({ storage: storage });

// cookie parser is used to parse cookies from the client
app.use(cookieParser());

// body parser is used to parse the body of the request
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // Body limit is 10

// session is used to store data on the server
app.use(
  session({
    secret: process.env.SESSION_SECRET, // this is used to sign the session ID cookie
    resave: true, // forces the session to be saved back to the session store, even if the session was never modified during the request
    saveUninitialized: true, // forces a session that is "uninitialized" to be saved to the store
  })
);

// set the view engine to ejs so we can use ejs files to render the pages
app.set("view engine", "ejs");

// set the directory where the ejs files are located
app.set("views", __dirname + "/views");

// set the directory where the static files are located
app.use(express.static(__dirname + "/public"));

const signToken = (data) => {
  var token = jwt.sign({ data }, process.env.JWT_SECRET);
  return token;
};

const verifyToken = (token) => {
  try {
    let verify = jwt.verify(token, process.env.JWT_SECRET);
    return { status: true, data: verify.data };
  } catch {
    return { status: false };
  }
};

// set the routes to use for the app (this is where the magic happens)
app.get("/", (req, res) => {
  let token = signToken("user123"); // create a token

  console.log(verifyToken("false_token")); // false
  console.log(verifyToken(token)); // true if token has not expired yet

  res.cookie("token", token, {
    maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
    httpOnly: true,
  }); // set the token as a cookie

  res.render("index");
});

//  route to check if the user is logged in 
app.get("/auth", (req, res) => {
  let token = req.cookies.token; // get the token from the cookie

  if (token) {
    let verify = verifyToken(token); // verify the token

    if (verify.status) {
      res.send("✅ You are logged in");
    } else {
      res.send("❎ You are not logged in");
    }
  } else {
    res.send("❎ You are not logged in");
  }
});

// set the port to listen on
app.listen(process.env.PORT || 3000, () => {
  console.log("Server started on port 3000");
});
