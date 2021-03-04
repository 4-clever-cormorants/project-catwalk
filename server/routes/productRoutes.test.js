const supertest = require('supertest');

const expServer = require('../server');

test('GET /products/data', () => {
  supertest(expServer.app)
    .get('/products')
    .expect(200)
    .then((res) => {
      expect(res.data)
    })
  expServer.server.close();
});
