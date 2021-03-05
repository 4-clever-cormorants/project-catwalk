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
  axios.get(`${apiUrl}qa/questions/?product_id=${req.query.productId}&count=${req.query.count}`, headers)
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.put('/questionHelpful', (req, res) => {
  axios.put(`${apiUrl}qa/questions/${req.body.questionId}/helpful`, { question_id: req.body.questionId }, headers)
    .then(() => {
      res.send('Put successful');
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
});

router.get('/answers', (req, res) => {
  axios.get(`${apiUrl}qa/questions/${req.query.questionId}/answers/?count=${req.query.answerCount}`, headers)
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.put('/answerHelpful', (req, res) => {
  axios.put(`${apiUrl}qa/answers/${req.body.answerId}/helpful`, { answer_id: req.body.answerId }, headers)
    .then(() => {
      res.send('Put successful');
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
});

router.put('/answerReport', (req, res) => {
  axios.put(`${apiUrl}qa/answers/${req.body.answerId}/report`, { answer_id: req.body.answerId }, headers)
    .then(() => {
      res.send('Put successful');
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
});

module.exports = router;
