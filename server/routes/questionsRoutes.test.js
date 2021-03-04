const supertest = require('supertest');

const expServer = require('../server');

test('GET /test', () => {
  supertest(expServer.app)
    .get('/test')
    .expect(200)
    .then((response) => {
      expect(response.text).toBe('test');
    });
  expServer.server.close();
});

test('GET /qa/', () => {
  supertest(expServer.app)
    .get('/qa/')
    .expect(200)
    .then((response) => {
      expect(response.text).toBe('Hello World');
    });
  expServer.server.close();
});

test('GET /qa/questions', () => {
  supertest(expServer.app)
    .get('/qa/questions')
    .expect(200);
  expServer.server.close();
});
