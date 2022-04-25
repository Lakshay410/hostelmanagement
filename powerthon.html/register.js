const mongoose = require("mongoose");

const students = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    gender : {
        type : String,
        required : true
    },
    mobile : {
        type : Number,
        required : true,
    },
    cgpa :{
        type : Number,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    confirmpassword : {
        type : String,
        required : true
    }

})

const Register = new mongoose.model("Information", students);

module.exports = Register;