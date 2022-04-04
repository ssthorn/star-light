const express = require("express");
const app = express();
require("dotenv").config();
const cors = require('cors');
const methodOverride = require("method-override");
const session = require("express-session");
// const mongoose = require("mongoose")
const MongoDBStore = require("connect-mongodb-session")(session);
const morgan = require('morgan');
const store = new MongoDBStore({uri: process.env.MONGO_URI,collection: "mySessions",});
require('./db-utils/connect');
const taskController = require('./controllers/taskController');
const userController = require('./controllers/userController');
const { urlencoded } = require("express");
app.use(urlencoded({extended: true}));
app.use(cors())
app.use(methodOverride('_method'))
app.use(morgan('short'))
app.use(express.json());
app.use('/tasks', taskController)
app.use('/users', userController)
app.use(session({secret: process.env.SESSION_SECRET,resave: false,saveUninitialized: false,store: store,}))
const port = process.env.PORT || 3001;
app.listen(port, () => {console.log("app running");});