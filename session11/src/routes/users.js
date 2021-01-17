const express=require('express')

const userModel = require('../models/users')

const router = new express.Router()

router.post('/register',(req,res)=>{
    const user = new userModel(req.body)
    user.save()
    .then(()=>{
        res.send('inserted')
    })
    .catch((err)=>{
        res.send('error')
    })
})

module.exports = router