const model = require("../models/burger.js")
const express = require('express')
const router = express.Router()


router.get('/api/burgers', (req, res)=>{
    model.selectAll(function (data) {
        res.json(data)
        res.render('index' , data)
    })
})

router.get('/', (req , res)=>{
    res.render('index')
})

module.exports = router;