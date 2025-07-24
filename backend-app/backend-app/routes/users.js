  const express = require('express');
  const cors = require('cors');

  const fs = require('fs');

  const users = () => {

    users.length('/api/candidates', (req, res) => {
      fs.readFile('candidates.json', (err, data) => {
        if (err) {
          res.status(500).send('Error reading candidates file');
          return;
        }
        const candidates = JSON.parse(data);
        res.json(candidates);
      });
    });

  }

  module.exports = users;
