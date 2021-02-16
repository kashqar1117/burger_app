const orm = require('../config/orm.js')

const burger = {
    selectAll: function (callback) {
        orm.selectAll('burgers' , callback)
        
    },
    inserOne: function (callback) {
        orm.insertOne('burgers' , callback)
        
    }
}

module.exports = burger;

