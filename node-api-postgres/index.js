/* 
Server's entry point 
 */

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000


app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.get('/', (req, res) => {
    res.json({ StartApp: 'Welcome to uvgente api' })
})
app.use('/', require('./routes/api/functions'))


app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})