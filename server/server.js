const express = require('express');

const path = require('path');

const app = express();

const interactionsRoutes = require('./routes/interactionsRoutes.js');
const productRoutes = require('./routes/productRoutes.js');
const questionsRoutes = require('./routes/questionsRoutes.js');
const relatedRoutes = require('./routes/relatedRoutes.js');
const ratingRoutes = require('./routes/ratingRoutes.js');
const wishListRoutes = require('./routes/wishListRoutes.js');

app.use(express.static(path.join(__dirname, '../client/dist')));

const logger = (req, res, next) => {
  console.log(`Receiving request to ${req.url} with method ${req.method}`);
  next();
};

app.use('/', logger);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/interactions', interactionsRoutes);
app.use('/qa', questionsRoutes);
app.use('/related', relatedRoutes);
app.use('/products', productRoutes);
app.use('/styles', productRoutes);
app.use('/rating', ratingRoutes);
app.use('/wishList', wishListRoutes);

app.get('/', (req, res) => {
  res.render('index');
});

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
