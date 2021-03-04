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

router.get('/relatedProducts', (req, res) => {
  axios
    .get(`${url}products/${req.query.product_id}/related`, headers)
    .then((related) => {
      res.send(related.data);
      // for (let i = 0; i < related.data.length; i += 1) {
      // }
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

module.exports = router;
