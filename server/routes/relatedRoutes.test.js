import regeneratorRuntime from 'regenerator-runtime';

const supertest = require('supertest');

const expServer = require('../server');

test('response should be an array of object', () => {
  supertest(expServer.app)
    .get('/related/relatedProducts?product_id=14931')
    .expect(200)
    .then((response) => {
      expect(Array.isArray(response.data)).toBe(true);
      expect(typeof response.data[0]).toBe('object');

      for (let i = 0; i < response.data; i += 1) {
        const product = response.data[i];
        test('should have product name and id', () => {
          expect('name' in product).toBe(true);
          expect('id' in product).toBe(true);
        });
        test('should have sale price property', () => {
          expect('sale_price' in product).toBe(true);
        });
        test('should have thumbnail url property', () => {
          expect('thumbnail_url' in product).toBe(true);
        });
        test('should have average ratings property', () => {
          expect('average_ratings' in product).toBe(true);
        });
      }
    });
  expServer.server.close();
});
