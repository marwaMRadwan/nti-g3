const express = require('express')
const User = require('../models/users')
const userAuth = require('../middleware/authUser')
const adminAuth = require('../middleware/authAdmin')
const router = new express.Router()

router.post('/user/register', async(req, res)=>{
    const user = new User(req.body)
    try{
        await user.save()
        const token = await user.generateToken()
        res.status(200).send({
            status:1,
            data:{ user, token },
            message:"User Added"
        })
    }
    catch(error){
        res.status(500).send({
            status:0,
            data: {error},
            message:"error while inserting data"
        })
    }
})

router.post('/user/login', async(req,res)=>{
    try{
        const user = await User.findByCredintials(req.body.userName, req.body.password)
        const token = await user.generateToken()
        res.status(200).send({
            status:1,
            data:{user, token},
            message:"user logged in"
        })
    }
    catch(error){
        res.status(500).send({
            status:0,
            data:{error},
            message:"error in login"
        })
    }
})

router.get('/admin/showAll', adminAuth, async(req,res)=>{
    try{
        users = await User.find({})
        res.status(200).send({
            status:1,
            data:{users},
            message:"data retrived succussfuly"
        })
    }
    catch(error){
        res.status(500).send({
            status:0,
            data:{error}, message:"error loading data"
        })
    }    
})
module.exports = router