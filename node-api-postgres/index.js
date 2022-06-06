/* 
Server's entry point 
 */

//Constants
const express = require('express')
const bodyParser = require('body-parser')
const port = 8080
const cors = require("cors")
const cookieParser = require('cookie-parser')
const session = require('express-session')

const app = express()

//Middlewares

app.use(cors({
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST"],
  credentials: true,
}))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    key: "userId",
    secret: "aaaa",
    resave: true,
    saveUninitialized: true,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);

//Routes from functions
app.use(cookieParser());
app.use(express.json());
app.use('/', require('./routes/api/functions'))


app.listen(port, () => console.log(`App running on port ${port}.`))