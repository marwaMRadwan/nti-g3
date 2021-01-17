const mongoose = require('mongoose')
const validator = require('validator')
const User = mongoose.model('User',{
    name:{ 
        type: String,
        required:true,
        trim:true,
        minLength: 2,
        maxLength: 50
    },
    age:{
        type:Number,
        default:15,
        validate(value){
            if(value<15) throw new Error('invalid value')
        }
    },
    email:{        
        type: String,
        required:true,
        trim:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)) throw new Error('invalid email')
        }
    },
    password:{
        type: String,
        required:true,
        trim:true,
        minLength:6,
        maxLength:100
    }
})

module.exports = User