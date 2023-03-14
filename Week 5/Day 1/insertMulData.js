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
   let sql = "INSERT INTO students (name, address, age) VALUES ?";
   let values = [
    ['Joy', 'Canada', '24'],
    ['Sherlock', '21b St', '30'],
    ['John Wick', 'New York', '35'],
    ['Peter Parker', 'New York', '25']
   ];
   conn.query(sql, [values], function(err, result){
    if(err){
        throw err;
    }else{
        console.log("Record Inserted");
    }
   });
});