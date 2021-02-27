const express = require('express');

const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index');
});

const port = 1128;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
