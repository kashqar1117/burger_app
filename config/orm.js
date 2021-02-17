const { callbackify } = require('util');
const connection = require('./connection')
const newBurgerName =  require('javascript.js')
console.log(newBurgerName)


const orm = {

    // * `selectAll()`
    selectAll: function(table , callback){
        connection.query(`SELECT * FROM ${table};`,function(err,data){
            if (err)throw err;
            callback(data)
        })
    },


     //* `insertOne()`

     inserOne:function (table, val, cb) {
        connection.query(`INSERT INTO burgers ${table} VALUES (?)` , val, function(err, result) {
            if (err) {
              throw err;
            }
      
            cb(result);
          });
     }
     //* `updateOne()`



}



module.exports = orm


// app.put("/api/quotes/:id", function(req, res) {
//     connection.query(
//       "UPDATE quotes SET author = ?, quote = ? WHERE id = ?",
//       [req.body.author, req.body.quote, req.params.id],
//       function(err, result) {
//         if (err) {
//           // If an error occurred, send a generic server failure
//           return res.status(500).end();
//         }
//         else if (result.changedRows === 0) {
//           // If no rows were changed, then the ID must not exist, so 404
//           return res.status(404).end();
//         }
//         res.status(200).end();
  
//       }
//     );
//   });