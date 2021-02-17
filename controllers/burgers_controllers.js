const model = require("../models/burger.js")
const express = require('express')
const router = express.Router()


router.get('/api/burgers', (req, res)=>{
    model.selectAll(function (data) {
        res.json(data)
        res.render('index' , {burger:data})
    })
})


router.post("/api/burgers", function(req, res) {
    model.insertOne([
      "name"
    ], [
      req.body.name
    ], function(result) {
      // Send back the ID of the new quote
      console.log(result)
    });
  });


router.get('/', (req , res)=>{
    res.render('index')
})

module.exports = router;