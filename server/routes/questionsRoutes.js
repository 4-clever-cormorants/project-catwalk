const router = require('express').Router();
const axios = require('axios');
const fs = require('fs');
const fileType = require('file-type');
const multiparty = require('multiparty');

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

router.post('/questionPost', (req, res) => {
  const {
    productId,
    body,
    name,
    email,
  } = req.body;
  axios.post(`${apiUrl}qa/questions`, {
    body,
    name,
    email,
    product_id: productId,
  }, headers)
    .then((response) => {
      console.log(response);
      res.send('posted question');
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

router.post('/answerPost', (req, res) => {
  const {
    body,
    name,
    email,
    photos,
    questionId,
  } = req.body;
  const answerHeaders = {
    headers: {
      'User-Agent': 'request',
      Authorization: `${config.TOKEN}`,
    },
    question_id: questionId,
  };
  axios.post(`${apiUrl}qa/questions/${questionId}/answers`, {
    body,
    name,
    email,
    photos,
  }, answerHeaders)
    .then(() => {
      res.send('successfully posted answer');
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

const uploadPhoto = (buffer, name, type) => {
  const params = {
    ACL: 'public-read',
    Body: buffer,
    Bucket: process.env.S3_BUCKET,
    ContentType: type.mime,
    Key: `${name}.${type.ext}`,
  };
  return s3.upload(params).promise();
};

router.post('/test-upload', (req, res) => {
  const form = new multiparty.Form();
  form.parse(req, async (error, fields, files) => {
    if (error) {
      return res.status(500).send(error);
    }
    try {
      const { path } = files.file[0];
      const buffer = fs.readFileSync(path);
      const type = await fileType.fromBuffer(buffer);
      const fileName = `media/${Date.now().toString()}`;
      // const data = await uploadFile(buffer, fileName, type);
      // return response.status(200).send(data);
      console.log(fileName);
      return res.status(200).send(`fileName: ${fileName}, type: ${type}`);
    } catch (err) {
      return res.status(500).send(err);
    }
  });
});

module.exports = router;
