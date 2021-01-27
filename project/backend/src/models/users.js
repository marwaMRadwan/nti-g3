const mongoose= require('mongoose')
const jwt = require('jsonwebtoken')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true, 
        unique:true,
        trim:true,
        validate(value){
            if(!isAlphanumeric(value,['en-US'])){
                throw new Error('not valid')
            }
        }
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

userSchema.virtual('userBooks',{
    ref:'Book',
    localField:'_id',
    foreignField:'author'
})

userSchema.methods.toJSON = function(){
    const user = this
    userObject = user.toObject()
    delete userObject._id
    delete userObject.tokens
    delete userObject.password
    return userObject
}

userSchema.methods.generateToken = async function(){
    const user = this
    const token = jwt.sign({_id:user._id.toString()}, 'finalProject')
    user.tokens = user.tokens.concat({token})
    return token
}

userSchema.pre('save',async function(next){
    
})

const User = mongoose.model('User', userSchema)
module.exports = User