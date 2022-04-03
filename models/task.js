const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const taskSchema = new Schema({
    taskName: {type:String, unique: true, required: true},
    description: {type: String, unique: true, required: true},
    category: {type: String, default:"no category", required: false},
    complete: {type: Boolean, default: false, required: false},
    taskColor: {type: String, default: "#d0352c", required: false}
}, {timestamps: true})
const Task = mongoose.model('Task', taskSchema);
module.exports = Task;
