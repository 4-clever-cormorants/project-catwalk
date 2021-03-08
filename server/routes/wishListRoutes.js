const router = require('express').Router();
const wishlist = require('../models/wishlist');

router.get('/getAll', (req, res) => {
  const list = wishlist.getAll();
  res.status(200).send(list);
});

router.post('/add', (req, res) => {
  wishlist.add(parseInt(req.query.product_id, 10), () => {
    res.status(201).end();
  });
});

router.post('/drop', (req, res) => {
  wishlist.drop(parseInt(req.query.product_id, 10), () => {
    res.status(200).end();
  });
});

module.exports = router;
