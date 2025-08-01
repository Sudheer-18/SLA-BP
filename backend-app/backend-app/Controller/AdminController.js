const express = require('express')
const mydb = require('../Model/Admin')

const Admin = async(req,res) => {
    let data = req.body;
    mydb.insertMany(data)
    .then(res => {
        return res.status(200).json("Recorded added")
    })
    .catch(err => {
        return res.status(200).json("Something wrong record not added")
    })
}




exports.Admin = Admin;