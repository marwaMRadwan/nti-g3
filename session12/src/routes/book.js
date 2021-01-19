const express=require('express')
const bookModel = require('../models/book')
auth= require('../middleware/authorization')
const router = new express.Router()
//for logic
router.post('/book/add',auth, async(req,res)=>{
    bookData = new bookModel({
        ...req.body,
        author: req.user._id
    })
    try{
        await bookData.save()
        res.send({
            status:1,
            message:'added', 
            data: bookData
        })
    }
    catch(e){
        res.send({
            status:0,
            message:'error adding',
            data:e
        })
    }
})

router.get('/book/me', auth,async(req,res)=>{
    // data = await bookModel.find({author:req.user._id})
    // res.send(data)
    try{
        await req.user.populate('books').execPopulate()
        res.send(req.user.books)
    }
    catch(e){res.send({status:0, data:e})}

})

router.get('/book/mybook/:id',auth, async(req,res)=>{
    const _id = req.params.id
    try{
        const book = await bookModel.find({_id, author:req.user._id})
        if(!book) res.send('book not found')
        else res.send(book)
    }
    catch(e){
        res.send({
            status:0,
            data:e
        })
    }
})
 
router.patch('/book/:id',auth, async(req,res)=>{
    avl = ['name','date']
    requpdates = Object.keys(req.body)
    isAvl = requpdates.every((update)=>avl.includes(update))
    if(!isAvl) res.send('not available')
    try{
        const book = await bookModel.findOne({_id:req.params.id, author: req.user._id})
        if(!book) res.send('not found')
        requpdates.forEach(el =>{
            book[el] = req.body[el]
        })
        await book.save()
        res.send('updated')
    }
    catch(e){
        res.send(e)
    }
})
module.exports = router