const express = require('express')
const Category = require('../models/category')
const userAuth = require('../middleware/authUser')
const adminAuth = require('../middleware/authAdmin')
const router = new express.Router()

router.post('/cat/add',adminAuth,async(req,res)=>{
    try{
        const cat = new Category(req.body)
        await cat.save()
        res.send({
            status:1,
            data: {cat},
            message:"data inserted"
        })
    }
    catch(error){
        res.status(500).send({
            status:0,
            data:{error},
            message:"error inserting new category"
        })
    }
})

module.exports=router