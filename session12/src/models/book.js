//for database structure
const mongoose = require('mongoose')
const validator = require('validator')
const Book = mongoose.model('Book',{
    author:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
//        ref:'User'
    },
    name:{
        type: String,
        required: true,
        trim: true
    },
    date:{
        type:Date
    }
})
module.exports = Book
