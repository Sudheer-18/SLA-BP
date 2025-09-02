const express = require('express');
const Router = express.Router();
const StudentData = require('../Controller/StudentController');
const ProctorData = require('../Controller/ProctorController');
const Admin = require('../Controller/AdminController')

Router.post('/studentdata', StudentData.StudentData);
Router.post('/proctordata',ProctorData.ProctorData);
Router.post('/admindata',Admin.Admin);

module.exports  = Router;