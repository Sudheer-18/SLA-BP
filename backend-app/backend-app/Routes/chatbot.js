const express = require('express');
const Router = express.Router();
const { ChatBot } = require('../Controller/chatbot');

Router.post('/chatbot', ChatBot);

module.exports = Router;