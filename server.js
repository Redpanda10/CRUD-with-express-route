const express = require('express')
const app = express()

//connect to mongodb
const db=require('./db')


//importing middleware
const bodyparser = require('body-parser')
 
//using middleware
app.use(bodyparser.json())

app.get('/', function (req, res) {
  res.send('Hello World')
})
//import router files
const personRoutes=require('./routes/personRoutes')
const menuRoutes=require('./routes/menuRoutes')

//use routes
app.use('/person',personRoutes)
app.use('/menu',menuRoutes)


app.listen(3000,()=>{
    console.log('server is running on port 3000')
})