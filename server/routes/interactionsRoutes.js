const interactionsRoutes = require('express').Router();
const axios = require('axios');
const config = require('../../config.js');

const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/';
const headers = {
  headers: {
    'User-Agent': 'request',
    Authorization: `${config.TOKEN}`,
  },
};

interactionsRoutes.post('/', (req, res) => {
  res.send(req.body);
});

module.exports = interactionsRoutes;
