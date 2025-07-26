const express = require('express');
const Router = express.Router();
const StudentData = require('../Controller/StudentController');
const ProctorData = require('../Controller/ProctorController');

Router.post('/studentdata', StudentData.StudentData);
Router.post('/proctordata',ProctorData.ProctorData);

module.exports  = Router;