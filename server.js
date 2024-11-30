//welcome this is the server 

const express = require('express')
const app = express()

const passport = require('./auth');
require('dotenv').config();
const port = process.env.PORT || 3000
//connect to mongodb
const db=require('./db')


//importing middleware
const bodyparser = require('body-parser')
 
//using middleware
app.use(bodyparser.json())

// middleware to log request data
// Middleware Function
const logRequest = (req, res, next) => {
  console.log(`[${new Date().toLocaleString()}] Request Made to : ${req.originalUrl}`);
  next(); // Move on to the next phase
}
app.use(logRequest);

app.use(passport.initialize());
const localAuthMiddleware = passport.authenticate('local', {session: false})

app.get('/', function (req, res) {
  res.send('Hello World')
})
//import router files
const personRoutes=require('./routes/personRoutes')
const menuRoutes=require('./routes/menuRoutes')

//use routes
app.use('/person',personRoutes)
app.use('/menu',menuRoutes)


app.listen(port,()=>{
    console.log('server is running on port 3000')
})