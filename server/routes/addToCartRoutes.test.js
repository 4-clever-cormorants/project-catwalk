const supertest = require('supertest');

const expServer = require('../server');

test('GET /cart', () => {
  supertest(expServer.app)
    .get('/cart')
    .expect(200)
    .then((res) => {
      expect(typeof res.data).toBe('array');
    });
  expServer.server.close();
});

test('POST /cart', () => {
  supertest(expServer.app)
    .post('/cart', {
      sku_id: 407530,
    })
    .expect(201);
  expServer.server.close();
});
