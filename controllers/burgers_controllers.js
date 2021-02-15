const model = require("../models/burger.js")

app.get('/burgers', (req, res)=>{
    model.selectAll(function (data) {
        res.json(data)
        res.render('index' , data)
    })
})