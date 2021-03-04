const productRouter = require('express').Router();
const axios = require('axios');
const config = require('../../config.js');

const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/';
const headers = {
  headers: {
    'User-Agent': 'request',
    Authorization: `${config.TOKEN}`,
  },
};

productRouter.get('/data', (req, res) => {
  // res.send('hello');
  axios
    .get(`${url}products/${req.query.product_id}`, headers)
    .then((product) => {
      res.send(product.data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

productRouter.get('/styles', (req, res) => {
  axios
    .get(`${url}products/${req.query.product_id}/styles`, headers)
    .then((styles) => {
      res.send(styles.data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

module.exports = productRouter;
