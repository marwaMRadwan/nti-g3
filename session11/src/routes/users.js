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

router.get('/users', (req,res)=>{
    userModel.find({})
    .then( (alldata)=>{
        res.send(alldata)
    } )
    .catch( (e)=>{
        res.send(e)
    })
})

router.get('/users/:userid', (req,res)=>{
    userModel.findById(req.params.userid)
    .then( (userData)=>{
        if(!userData) return res.send('not found')
        res.send(userData)
    } )
    .catch( (e)=>{
        res.send(e)
    })
})

module.exports = router