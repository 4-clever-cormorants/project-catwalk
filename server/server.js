const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '/../client/dist')));

const port = 3000;

const logger = (req, res, next) => {
  console.log(`Receiving request to ${req.url} with method ${req.method}`);
  next();
};

app.get('/', logger);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// some change to commit
