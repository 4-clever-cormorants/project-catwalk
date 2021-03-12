import regeneratorRuntime from 'regenerator-runtime';


const supertest = require('supertest');
const expServer = require('../server');

test('GET /rating/data', () => {
  supertest(expServer.app)
    .get('/rating')
    .expect(200)
    .then((res) => {
      expect(typeof res.data).toBe('object');
    });
  expServer.server.close();
});
