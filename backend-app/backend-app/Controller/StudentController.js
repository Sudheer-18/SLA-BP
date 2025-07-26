const express = require('express');
const mydb = require('../Model/StudentModel');

const StudentData = async(req,res) => {

    let data = req.body;
    mydb.insertMany(data)
   .then(result => {
    return res.status(200).json("Record added to database");
   })
   .catch(err => {
    console.log("something went wrong, data not added to database");
    return res.status(500).json(err);
   })

}


exports.StudentData = StudentData;