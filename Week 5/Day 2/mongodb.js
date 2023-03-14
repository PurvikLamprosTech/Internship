let {MongoClient} = require('mongodb');
let url = "mongodb://localhost:27017";
let dbName = 'mydb1';
let client = new MongoClient(url);

async function getData(){
    let result = await client.connect();
    let db = result(dbName);
    let collection = db.collection("students");
    let response = await collection.find({}).toArray();
    console.log(response);
}

getData();













// MongoClient.connect(url, function(err, db){
//     if(err){
//         throw err;
//     }
//     console.log("Database Created !");
//     db.close();
//     let dbo = db.db("mydb1");
//     dbo.createCollection("students", function(err, res){
//         if(err){
//             throw err;
//         }
//         console.log("Collection Created !");
//         db.close();
//     });
// });





// let MongoClient = require('mongodb').MongoClient;
// let url = "mongodb://localhost:27017";

// MongoClient.connect(url, function(err, db){
//     if(err){
//         throw err;
//     }
//     let dbo = db.db("mydb1");
//     dbo.createCollection("students", function(err, res){
//         if(err){
//             throw err;
//         }
//         console.log("Collection Created !");
//         db.close();
//     });
// });

