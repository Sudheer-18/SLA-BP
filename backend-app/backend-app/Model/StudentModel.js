const express = require('express');
const mongoose  =require('mongoose');


const StudentSchema = new mongoose.Schema({
    Name : {
        type : String,
        required : true
    },
    UserName : {
        type : String
    },
    Email : {
        type : String,
        requires : true
    },
    Password : {
        type : String
    }
    
})


module.exports = mongoose.model('StudentSchema', StudentSchema);