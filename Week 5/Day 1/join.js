let mysql = require('mysql');

let conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Pbpanchal@121',
    database: 'mydb'
});


// // ------- INNER JOIN (JOIN)---------
// conn.connect(function(err){
//    if(err){
//     throw err;
//    }else{
//     console.log("Connected!");
//    }
//    let sql = "SELECT users.name AS USERS, products.name AS Favourites FROM users JOIN products ON users.favourite_product = products.id";
//    conn.query(sql, function(err, result){
//     if(err){
//         throw err;
//     }else{
//         console.log(result);
//     }
//    });
// });


// // ----------------LEFT JOIN

// conn.connect(function(err){
//     if(err){
//      throw err;
//     }else{
//      console.log("Connected!");
//     }
//     let sql = "SELECT users.name AS USERS, products.name AS Favourites FROM users LEFT JOIN products ON users.favourite_product = products.id";
//     conn.query(sql, function(err, result){
//      if(err){
//          throw err;
//      }else{
//          console.log(result);
//      }
//     });
//  });


// // =============RIGHT JOIN-------------


conn.connect(function(err){
    if(err){
     throw err;
    }else{
     console.log("Connected!");
    }
    let sql = "SELECT users.name AS USERS, products.id, products.name AS Favourites FROM users RIGHT JOIN products ON users.favourite_product = products.id";
    conn.query(sql, function(err, result){
     if(err){
         throw err;
     }else{
         console.log(result);
     }
    });
 });