var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.0";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var db = db.db("mydb");
  var myobj = { name: "Company Inc", address: "Highway 37" };
  dbo.collection("customers").insertOne(myobj, function(err) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});