let {MongoClient} = require('mongoose');
let url = "mongodb://127.0.0.1:27017/directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.0";
// let dbName = 'test';
const client = new MongoClient(url, (err, client)=>{
    if(err){
        console.log(err);
    }
    if(client){
        console.log(client);
    }
});

// console.log(client);

const getData = async() => {
    const connected = await client.connect();
    console.log(connected);       
}

getData();

// async function getData(){
//     let result = await client.connect();
//     // await result.db("test").createCollection("sample");
//     // let collection = db.collection("students");
//     // let response = await collection.find({}).toArray();
//     console.log(response);
// }

// getData();