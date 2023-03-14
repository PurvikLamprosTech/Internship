const {mongoose} = require("mongoose");

// mongoose.connect("mongodb://localhost:27017" , (err)=>{
//     if(!err) console.log('connected');
//     else
//         console.log('db error');
// })

// const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect(process.env.MONGO_URI) 
        console.log('Mongo connected')
    } catch(error) {
        console.log(error)
        process.exit()
    }
}

module.exports = connectDB();

// const schema = new Schema({
//     name: String
//   }, {
//     capped: { size: 1024 },
//     bufferCommands: false,
//     autoCreate: false // disable `autoCreate` since `bufferCommands` is false
//   });
// mongoose.connect('mongodb://127.0.0.1:27017/mydb');
// const MyModel = mongoose.model('Test', new Schema({ name: String }));
// // Works
// MyModel.findOne(function(error, result) { /* ... */ });