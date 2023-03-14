const mongoose = require('mongoose');
const validator = require('validator');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3
    },
    email:{
        type: String,
        required: true,
        unique:[true, "Email is already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Invalid Email Id');
            }
        }
    },
    phone:{
        type: Number,
        min: 10,
        required: true,
        unique: true
    },
    address:{
        type: String,
        required: true
    },
    age: {type: Number}
})

//Collection
const Student = new mongoose.model('Student', studentSchema);

module.exports = Student;