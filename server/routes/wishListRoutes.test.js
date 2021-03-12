import regeneratorRuntime from 'regenerator-runtime';

const supertest = require('supertest');

const expServer = require('../server');

test('response should be an array of object', () => {
  supertest(expServer.app)
    .get('/wishList/getAll')
    .expect(200)
    .then((response) => {
      expect(Array.isArray(response.data)).toBe(true);
    });
  expServer.server.close();
});
