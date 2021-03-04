const express = require('express');

const path = require('path');

const app = express();

const CAMPUS_CODE = 'hr-sfo';

const axios = require('axios');

const url = require('url');

const config = require('../config.js');

const questionsRoutes = require('./routes/questionsRoutes.js');
const relatedRoutes = require('./routes/relatedRoutes.js');

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/qa', questionsRoutes);
app.use('/related', relatedRoutes);

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
