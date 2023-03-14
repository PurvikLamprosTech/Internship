const express = require('express');
require('./db/conn');
const Student = require('./models/students');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// app.get('/', (req,res)=>{
//     console.log("Console text")
//     res.send('Hello !!');
// });


// app.post("/students", (req,res) => {
//     console.log(req.body);
//     const user = new Student(req.body);

//     user.save().then(()=>{
//         res.status(201).send(user);
//     }).catch((err) =>{
//         res.status(400).send(err);
//     })
// })


app.post("/students", async(req,res) => {
    try {
        console.log(req.body);
        const user = new Student(req.body);
        const createUser = await user.save();  
        res.status(201).send(createUser);
    } catch (error) {
        res.status(400).send(error);
    }
})

app.get("/students", async(req,res) =>{
    try {
        const studentsData = await Student.find();
        res.send(studentsData);
    } catch (error) {
        res.send(error);
    }
})

app.get("/students/:id", async(req,res)=>{
    try{
        const _id = req.params.id;
        const studentData = await Student.findById(_id);

        if(!studentData){
            return res.status(404).send();
        }else{
            res.send(studentData);
        }
        // res.send(req.params.id);
    }catch(err){
        res.send(err)
    }
})

app.patch("/students", async(req, res)=>{
    try {
        const _id = req.params.id;
        const updateStudents = await Student.updateOne(_id, req.body, {
            new: true
        });
        res.send(updateStudents);
    } catch (error) {
        res.status(400).send(updateStudents);
    }
})

app.listen(port, ()=>{
    console.log(`Connection is setup at ${port}`);
})