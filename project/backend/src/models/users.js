const mongoose= require('mongoose')
const jwt = require('jsonwebtoken')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true, 
        unique:true,
        trim:true
    },
    phone:{
        type:String,
        required:true,
        trim:unique
    },
    age:{
        type:Number
    },
    image:{
        type:String
    },
    password:{
        type:String, trim:true, required:true
    },
    userType:{
        type:Boolean,
        required:true
    },
    tokens:[{token:{
        type:String
    }}]
},
{timestamps:true}
)

const User = mongoose.model('User', userSchema)
module.exports = User