const {mongoose} = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/mydb" ,{
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
const collection1 = new mongoose.model("Marvel", schemaEx);


const createDocument = async ()=>{
    try {
        const data = new collection1 ({
            name: 'RDJ',
            age: 45,
            superhero: true,
            power: 'Ironman'
        })
        const data2 = new collection1 ({
            name: 'Nick Fury',
            age: 55,
            superhero: false
        })
        const data3 = new collection1 ({
            name: 'Chris Hemsworth',
            age: 35,
            superhero: true,
            power: 'God of Thunder'
        })
        const data4 = new collection1 ({
            name: 'Peter Parker',
            age: 25,
            superhero: true,
            power: 'Spiderman'
        })
        const data5 = new collection1 ({
            name: 'Scott Lang',
            age: 35,
            superhero: true,
            power: 'Ant-man'
        })
    
        const result = await collection1.insertMany([data,data2,data3,data4,data5]);
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

