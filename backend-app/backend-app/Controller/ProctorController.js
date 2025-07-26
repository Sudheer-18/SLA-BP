const express = require('express');
const mydb = require('../Model/ProcterModel');

const ProctorData = async(req,res) => {

    let data = req.body;
       mydb.insertMany(data)
      .then(result => {
       return res.status(200).json("Record added to database");
      })
      .catch(err => {
       return res.status(500).json("something went wrong data not added"+err);
      })
}


exports.ProctorData = ProctorData;