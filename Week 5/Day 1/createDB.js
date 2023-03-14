let mysql = require('mysql');

let conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Pbpanchal@121"
});

conn.connect(function(err){
    if(err){
        throw err;
    }else{
        console.log("Connected!");
    }
    conn.query("CREATE DATABASE mydb", function(err, result){
        if(err){
            throw err;
        }else{
            console.log("Database created");
        }
    });
});

