const express = require('express')
const mongoose = require('mongoose')


const AdminModel = new mongoose.Schema({
    userName: {
        type : String,
        require : true
    },
    Password: {
        type : String,
        require : true
    }
})


module.exports = mongoose.model('admin',AdminModel);