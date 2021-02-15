const connection = require('./connection')


const orm = {

    // * `selectAll()`
    selectAll: function(table , callback){
        connection.query(`SELECT * FROM ${table};`,function(err,data){
            if (err)throw err;
            callback(data)
        })
    }


     //* `insertOne()`
     //* `updateOne()`

}



module.exports = orm