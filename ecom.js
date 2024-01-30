const mongoose = require('mongoose');

const expensesSchema = new mongoose.Schema({
    id:Number,
    title: String,
    price: Number,
    desc: String,
    category: String,
    image:String,
    rating:Number,
    count:Number
});

const expSchema = mongoose.model('ecoms', expensesSchema );

module.exports = expSchema;