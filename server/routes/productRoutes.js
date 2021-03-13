const productRoutes = require('express').Router();
const axios = require('axios');
const urlModule = require('url');
const config = require('../../config.js');

const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/';
const headers = {
  headers: {
    'User-Agent': 'request',
    Authorization: `${config.TOKEN}`,
  },
};

productRoutes.get('/data', (req, res) => {
  axios
    .get(`${url}products/${req.query.product_id}`, headers)
    .then((product) => {
      res.send(product.data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

productRoutes.get('/styles', (req, res) => {
  axios
    .get(`${url}products/${req.query.product_id}/styles`, headers)
    .then((styles) => {
      styles.data.results.forEach((style) => {
        style.photos.forEach((photo) => {
          const urlOrigin = urlModule.parse(photo.url, true, true);
          urlOrigin.search = '';
          urlOrigin.query.w = '600';
          urlModule.format(urlOrigin);
          const urlFit = urlModule.format(urlOrigin);
          photo.url = urlFit;
        });
      });
      res.send(styles.data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

module.exports = productRoutes;
