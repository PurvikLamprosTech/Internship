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
   let sql = "SELECT * FROM students";
   conn.query(sql, function(err, result){
    if(err){
        throw err;
    }else{
        console.log(result);
    }
   });
});


// conn.connect(function(err){
//     if(err){
//      throw err;
//     }else{
//      console.log("Connected!");
//     }
//     let sql = "SELECT * FROM students WHERE name='John Wick' AND address LIKE 'N%'";
//     conn.query(sql, function(err, result){
//      if(err){
//          throw err;
//      }else{
//          console.log(result);
//      }
//     });
//  });



// conn.connect(function(err){
//     if(err){
//      throw err;
//     }else{
//      console.log("Connected!");
//     }
//     let sql = "SELECT * FROM students WHERE name='John Wick' OR address LIKE 'N%'";
//     conn.query(sql, function(err, result){
//      if(err){
//          throw err;
//      }else{
//          console.log(result);
//      }
//     });
//  });