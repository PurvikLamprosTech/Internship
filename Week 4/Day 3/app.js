// // upload a file 
// // Reference : https://youtu.be/ymO_r1hcIXk


const express = require('express');
const upload = require('express-fileupload');

const app = express();

app.use(upload());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/', (req, res) => {
    if(req.files){
        console.log(req.files);
        let file = req.files.file;
        let filename = file.name;
        console.log("Your file name is ",filename);


        file.mv('./uploads/'+filename, (err) => {      // it will move all the uploaded files to the uploads folder
            if(err){
                res.send(err);
            } else{
                res.send("File Uploaded");
            }
        })          
    }
})

app.listen(3000);
