const mongoose = require('mongoose')
const bookSchema = new mongoose.Schema({
    author:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        trim:true, 
        ref:'User'
    },
    name:{
        type:String,
        required:true,
        trim:true
    },
    category:[
        {
            catId:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'Category',
                required:true,
                trim:true
            }
        }
    ],
    nOfPages:{
        type:Number,
        required:true,
        validate(value){
            if(value<60) throw new Error('Book must be more than 60 papers')
        }
    }
},
{timestamps:true}
)
const Book = mongoose.model('Book', bookSchema)
module.exports= Book