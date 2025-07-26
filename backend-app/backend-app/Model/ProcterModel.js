const express = require('express');
const mongoose = require('mongoose');

const ProcterModel = new mongoose.Schema({
    Name : {
        type : String,
        require : true
    },
    userName : {
        type : String,
    },
    email : {
        type : String,
        require : true
    },
    phno : {
        type : Number
    }
})

module.exports = mongoose.model('ProcterModel',ProcterModel);