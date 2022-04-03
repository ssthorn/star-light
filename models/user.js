const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    userName: {type:String, unique: true, required: true},
    userColor: {type: String, default: "#d0352c", required: false},
    tasksTaken:{type: String, default: "no tasks", required: false}
}, {timestamps: true})
const User = mongoose.model('User', userSchema);
module.exports = User;
