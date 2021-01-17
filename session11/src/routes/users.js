const express=require('express')
const userModel = require('../models/users')
const router = new express.Router()
// register with then , catch
router.post('/register',(req,res)=>{
    const user = new userModel(req.body)
    user.save()
    .then(()=>{
        res.send({
            status: 1,
            message:'data inserted successfuly',
            data: user
        })
    })
    .catch((err)=>{
        res.send({
            status:0,
            message: 'data inserting error',
            data: err
        })
    })
})

router.get('/users', (req,res)=>{
    userModel.find({})
    .then( (alldata)=>{
        res.send({
            status:1,
            message: 'all data retriverd',
            data: alldata
        })
    } )
    .catch( (e)=>{
        res.send({
            status:0,
            message: 'data retreving error',
            data: e
        })
    })
})

router.get('/users/:userid', (req,res)=>{
    userModel.findById(req.params.userid)
    .then( (userData)=>{
        if(!userData) return res.send({
            status:2,
            message: 'not found',
            data: ''
        })
        res.send({
            status:1,
            message: 'user data retriverd',
            data: userData
           
        })
    } )
    .catch( (e)=>{
        res.send({
            status:0,
            message: 'data retrive error',
            data: e
        })
    })
})

///////////////////////////////////////////////////////
//register with async await
router.post('/addme', async (req,res) => {
    const user = new userModel(req.body)
    try{
        await user.save()
        res.send({
            status: 1,
            message:'data inserted successfuly',
            data: user
        })
    }
    catch(e){
        res.send({
            status:0,
            message: 'data inserting error',
            data: e
        })
    }
})

router.get('/usersAsync', async(req,res)=>{
    try{
         alldata = await userModel.find({})
            res.send({
                status:1,
                message: 'all data retriverd',
                data: alldata
            })
    }
    catch(e){
        res.send({
            status:0,
            message: 'data retreving error',
            data: e
        })
    }
})

router.get('/usersAsync/:userid', async(req,res)=>{
    userid = req.params.userid
    try{
        userData = await userModel.findById(userid)
        if(!userData) return res.send({
            status:2,
            message: 'not found',
            data: ''
        })
        res.send({
            status:1,
            message: 'user data retriverd',
            data: userdata
           
        })
    }
    catch(e){
        res.send({
            status:0,
            message: 'data retrive error',
            data: e
        })
    }
   
})

router.patch('/usersAsync/:userid', async(req,res)=>{
    avlUpdates = ["name", "age"]
    const keys = Object.keys(req.body) // [name]
    const flag = keys.every((k)=> avlUpdates.includes(k))  //name true 
    if(!flag) return res.send({
        status:0,
        message:"invalid update keys",
        data:""
    })
    try{
        const user = await userModel.findByIdAndUpdate(
            req.params.userid,
            req.body,
            {runValidators:true}
        )
        if(!user) return res.send({
            status:2,
            message: 'user not found',
            data:''
        })
        res.send({
            status:1,
            message:"updated",
            data: user
        })
    }
    catch(e){
        res.send({
            status:0,
            message: 'error in edit',
            data: ''
        })
    }
})

router.delete('/usersAsync/:userid', async(req,res)=>{
    try{
        const user = await userModel.findByIdAndDelete(req.params.userid)
        if(!user) return res.send({
            status:2,
            message: 'user not found'
        })
        res.send({
            status:1,
            message:"deleted"
        })
    }
    catch(e){
        res.send({
            status:0,
            message: 'error in delete'
        })
    }
})

module.exports = router