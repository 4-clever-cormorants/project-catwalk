const router = require('express').Router();
const axios = require('axios');
const config = require('../../config.js');

const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/';
const headers = {
  headers: {
    'User-Agent': 'request',
    Authorization: `${config.TOKEN}`,
  },
};

const requestProductInfo = (productId) => axios.get(`${url}products/${productId}`, headers);
const requestProductStyle = (productId) => axios.get(`${url}products/${productId}/styles`, headers);
const requestData = (productId) => Promise.all([
  requestProductInfo(productId),
  requestProductStyle(productId),
]).then((results) => {
  const productInfo = results[0].data;
  productInfo.sale_price = results[1].data.results[0].sale_price;
  productInfo.thumbnail_url = results[1].data.results[0].photos[0].thumbnail_url;
  return productInfo;
});

router.get('/relatedProducts', (req, res) => {
  axios
    .get(`${url}products/${req.query.product_id}/related`, headers)
    .then((related) => {
      const wait = [];
      for (let i = 0; i < related.data.length; i += 1) {
        wait.push(requestData(related.data[i]));
      }
      Promise.all(wait)
        .then((dataList) => {
          res.send(dataList);
        });
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

module.exports = router;
