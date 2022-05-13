/* 
Server's entry point 
 */

//Constants
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8080
const cors = require("cors")
const jwt = require("jsonwebtoken")

//Middlewares
app.use(cors())

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
//Index route
app.get('/', async (req, res) => {
    res.json({ StartApp: 'Welcome to uvgente api' })
})
//Routes from functions
app.use('/', require('./routes/api/functions'))


app.listen(port, () => console.log(`App running on port ${port}.`))