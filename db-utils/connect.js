const mongoose = require("mongoose");
// Configuration
const db = mongoose.connection;

// Connect to Mongo database
mongoose.connect(process.env.MONGO_URI);

// Connection middleware. messages for Error/Success
db.on("error", (err) => console.log(err.message + " is Mongod not running?"));
db.on("connected", () =>
  console.log("mongo connected: ", process.env.MONGO_URI)
);
db.on("disconnected", () => console.log("mongo disconnected"));
