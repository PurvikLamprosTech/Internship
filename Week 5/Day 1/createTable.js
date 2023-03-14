let mysql = require('mysql');

let conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Pbpanchal@121",
    database: "mydb"
});

conn.connect(function(err){
    if(err){
        throw err;
    }else{
        console.log("Connected!");
    }
    let sql = "CREATE TABLE students (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
    conn.query(sql, function(err, result){
        if(err){
            throw err;
        }else{
            console.log("Table Created");
        }
    });
});



// conn.connect(function(err){
//     if(err){
//         throw err;
//     }else{
//         console.log("Connected!");
//     }
//     let sql = "CREATE TABLE students2 (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
//     conn.query(sql, function(err, result){
//         if(err){
//             throw err;
//         }else{
//             console.log("Table Created");
//         }
//     });
// });

