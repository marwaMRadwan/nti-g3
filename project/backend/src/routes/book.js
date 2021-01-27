const express = require('express')
const Book = require('../models/book')
const userAuth = require('../middleware/authUser')
const adminAuth = require('../middleware/authAdmin')
const generalAuth = require('../middleware/authGeneral')
const router = new express.Router()

router.post('/book/add', generalAuth, async(req,res)=>{
    try{
        const book = new Book(req.body)
        await book.save()
        res.send(book)
    }
    catch(e){
        res.send(e)
    }
})

module.exports= router