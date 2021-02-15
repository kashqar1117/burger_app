const orm = require('../config/orm.js')

const burger = {
    selectAll: function (callback) {
        orm.selectAll('burgers' , callback)
        
    },
    update: function (callback) {
        orm.update('burgers' , callback)
        
    }
}

module.exports = burger;

