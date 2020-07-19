let mongoose = require('mongoose');

//list schema

let listSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    },
})

let list = module.exports = mongoose.model('list', listSchema);