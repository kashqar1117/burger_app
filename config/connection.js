const mysql = require('mysql')



var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'mysqlpassword',
    database : 'burgers_db'
  });
   
  connection.connect(err =>{
      if (err) throw err
  
      console.log(`mysql connected on ${connection.threadId}`)
  });
   
  module.exports = connection;