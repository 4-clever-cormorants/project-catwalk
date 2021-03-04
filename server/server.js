const express = require('express');

const path = require('path');

const app = express();

const productRouter = require('./routes/productRoutes.js');

app.use(express.static(path.join(__dirname, '../client/dist')));

const logger = (req, res, next) => {
  console.log(`Receiving request to ${req.url} with method ${req.method}`);
  next();
};

app.use('/', logger);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index');
});

app.use('/products', productRouter);

app.use('/styles', productRouter);

app.get('/test', (req, res) => {
  res.send('test');
});

const port = 1128;

const server = app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

module.exports = {
  app,
  server,
};
