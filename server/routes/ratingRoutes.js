const ratingRouter = require('express').Router();
const axios = require('axios');
const config = require('../../config.js');

const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/';
const headers = {
  headers: {
    'User-Agent': 'request',
    Authorization: `${config.TOKEN}`,
  },
};

const average = (ratings) => {
  let scores = 0;
  let total = 0;
  for (let i = 1; i <= 5; i += 1) {
    if (ratings[i.toString()] !== undefined) {
      scores += i * parseInt(ratings[i.toString()], 10);
    }
  }
  for (let i = 1; i <= 5; i += 1) {
    if (ratings[i.toString()] !== undefined) {
      total += parseInt(ratings[i.toString()], 10);
    }
  }
  return scores / total;
};

ratingRouter.get('/data', (req, res) => {
  axios
    .get(`${url}reviews/meta?product_id=${req.query.product_id}`, headers)
    .then((rating) => {
      const result = { average: average(rating.data.ratings) };
      res.send(result);
    })
    .catch((err) => {
      console.error(err);
    });
});

module.exports = ratingRouter;
