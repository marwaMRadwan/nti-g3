const express=require('express')
const bookModel = require('../models/book')
const router = new express.Router()
//for logic
router.get('/testbook', (req, res) => {
    res.send('test')
})

module.exports = router