const router = require('express').Router();
const axios = require('axios');
const config = require('../../config.js');

const apiUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/';
const headers = {
  headers: {
    'User-Agent': 'request',
    Authorization: `${config.TOKEN}`,
  },
};

router.get('/', (req, res) => {
  res.send('Hello World');
});

router.get('/questions', (req, res) => {
  axios.get(`${apiUrl}qa/questions/?product_id=${req.query.productId}`, headers)
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.get('/answers', (req, res) => {
  axios.get(`${apiUrl}qa/questions/${req.query.questionId}/answers`, headers)
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

module.exports = router;
