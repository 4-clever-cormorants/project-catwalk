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
  console.log(req.body);
  axios.post(`${url}interactions`, req.body, headers)
    .then(() => {
      res.send('cool');
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

module.exports = interactionsRoutes;
