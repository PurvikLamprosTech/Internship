let mysql = require('mysql');

let conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Pbpanchal@121',
    database: 'mydb'
});

conn.connect(function(err){
   if(err){
    throw err;
   }else{
    console.log("Connected!");
   }
   let sql = "SELECT * FROM students ORDER BY name";
   conn.query(sql, function(err, result){
    if(err){
        throw err;
    }else{
        console.log(result);
    }
   });
});
