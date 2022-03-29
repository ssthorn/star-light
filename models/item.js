//dependancies

const mongoose = require('mongoose');
//using mongoose for database communication

const Schema = mongoose.Schema;
//defining schema

const itemSchema = new Schema({
    productName: {type:String, unique: true, required: true},
    quantity: {type:Number, default: 0, required: true},
}, {timestamps: true})
//my schema for database items

const Item = mongoose.model('Item', itemSchema);
//defines that i will be using this schema as "Item"

module.exports = Item;
//sends out this info by name so it can be used by other files