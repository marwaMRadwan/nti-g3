//npm init  -   npm i express  -  npm i hbs
const express = require('express')
const path = require('path')
const hbs = require('hbs')
const app = express()
const PORT=3000

const publicDir = path.join(__dirname,'frontend/public')
const viewsDir = path.join(__dirname,'frontend/myviews')
const partialsDir = path.join(__dirname,'frontend/layouts')

app.set('view engine', 'hbs')
app.set('views', viewsDir)

hbs.registerPartials(partialsDir)
app.use(express.static(publicDir))

app.get('',(req,res)=>{
    res.render('index', { name:"marwa", age:36 } )
})

app.get('/about',(req,res)=>{
    res.render('about', {txt: "hello data"})
})

app.get('*', (req,res)=>{
    res.render('404',{message:'error page'})
})
app.listen(PORT)