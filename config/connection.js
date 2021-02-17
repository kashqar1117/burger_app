const mysql = require('mysql')

if(process.env.JAWS_URL){
    connection = mysql.createConnection(process.env.JAWS_URL)
}else{

    
    
    
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'mysqlpassword',
        database : 'burgers_db'
    });
}
   
  connection.connect(err =>{
      if (err) throw err
  
      console.log(`mysql connected on ${connection.threadId}`)
  });
   
  module.exports = connection;