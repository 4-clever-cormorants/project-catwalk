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
  const rates = Object.keys(ratings);
  let totalReviews = 0;
  let totalRatings = 0;
  if (rates.length === 0) { return null; }
  for (let i = 0; i < rates.length; i += 1) {
    totalRatings += i * parseInt(ratings[rates[i]], 10);
    totalReviews += parseInt(ratings[rates[i]], 10);
  }
  return totalRatings / totalReviews;
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
