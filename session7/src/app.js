//npm init    npm i express   npm i -g nodemon
const express = require('express')
const path = require('path')
const app = express()
const PORT=3001

const publicDir = path.join(__dirname,'../public')
app.use(express.static(publicDir))
app.get('',(req,res)=>{
    res.send('hello')
})

app.get('/about',(req,res)=>{
    res.send('<h2>about</h2>')
})

app.get('/json',(req,res)=>{
    res.send({name:'ahmed', age:30})
})

app.listen(PORT,()=>{
    console.log('server on localhost:3000')
})