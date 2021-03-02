const express = require('express');

const path = require('path');

const app = express();

const CAMPUS_CODE = 'hr-sfo';

const axios = require('axios');

const config = require('../config.js');

const logger = (req, res, next) => {
  console.log(`Receiving request to ${req.url} with method ${req.method}`);
  next();
};

app.use('/', logger);

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/test', (req, res) => {
  res.send('test');
});

app.get('/products', (req, res) => {
  // get all by default as a test
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/${CAMPUS_CODE}/products`, {
    headers: {
      'User-Agent': 'request',
      Authorization: `${config.TOKEN}`,
    },
  })
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

const port = 1128;

const server = app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

module.exports = {
  app,
  server,
};
