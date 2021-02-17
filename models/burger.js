const orm = require('../config/orm.js')


const burger = {
    selectAll: function (callback) {
        orm.selectAll('burgers' , callback)
        
    },
    insertOne: function (callback) {
        orm.insertOne('burgers' , callback)


    
        
    }
}

module.exports = burger;

