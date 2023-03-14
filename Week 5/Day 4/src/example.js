const {mongoose} = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/mydb2" ,{
useNewUrlParser: true,
useUnifiedTopology: true
}).then(() => {
    console.log("Connection Successful");
}).catch((err) => {
    console.log(err);
});

const schemaEx = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: Number,
    detective: Boolean
})
const collection1 = new mongoose.model("Students", schemaEx);


const createDocument = async ()=>{
    try {
        const data = new collection1 ({
            name: 'RDJ',
            age: 35,
            detective: true
        })
    
        const result = await data.save();
        console.log("Collection created",result);   
    } catch (error) {
        console.log(error);
    }

}

createDocument();

// data.save().then(() => {
//     console.log("Collection Created");
// }).catch((err) => {
//     console.log(err)
// });

