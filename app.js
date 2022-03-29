//declare/load dependancies 

const express = require("express");
//loads express module

const app = express();
//defines app as express

require("dotenv").config();
//loads environment variables from a .env file into process.env

const cors = require('cors');
//"cross-origin-resource-sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served."

const methodOverride = require("method-override");
//"Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it."

const session = require("express-session");
//session manager

const MongoDBStore = require("connect-mongodb-session")(session);
//more session management.  I left these in for reference as I build my project.

const morgan = require('morgan');
//"a Node. js and Express middleware to log HTTP requests and errors, and simplifies the process"

const store = new MongoDBStore({
  uri: process.env.MONGO_URI,
  collection: "mySessions",
});
//more session management. points to my mongo uri and put session in collection.

require('./db-utils/connect');
//"Create database tables and test data in Node.js"

const itemController = require('./controllers/itemController');
//points to my controller file for routes

const { urlencoded } = require("express");
// app.use(express.urlencoded({extended: true}));
//"a built-in middleware function in Express. It parses incoming requests with urlencoded payloads and is based on body-parser."


//
app.use(urlencoded({extended: true}));
app.use(cors())
app.use(methodOverride('_method'))
app.use(morgan('short'))
app.use(express.json());
app.use('/items', itemController)
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: store,
//more session code left in for later reference. defines where session seccret is, and what to do with session.
}))


 
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log("app running");
});
//defines which port will be used for localhost
//port has been changed from 3000 to 3001 bc front end will want to be using a different port than back
//at 1:02:21 of instructional video, this is the last step to complete the api, and begin work on front-end of app.