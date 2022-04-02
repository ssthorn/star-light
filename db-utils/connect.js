const mongoose = require("mongoose");
const db = mongoose.connection;
mongoose.connect(process.env.MONGO_URI);
db.on("error", (err) => console.log(err.message + " is Mongod not running?"));
db.on("connected", () => console.log("mongo connected: ", process.env.MONGO_URI));
db.on("disconnected", () => console.log("mongo disconnected"));
