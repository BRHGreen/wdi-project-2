require('../spec_helper');
const Restaurant = require('../../models/restaurant');

describe("Restaurant Controller Test", () => {
  describe("GET /api/restaurant", () => {
    it ("should return a 200 response", done => {
      api
        .get('/api/restaurants')
        .set('Accept', 'application/json')
        .expect(200, done);
      done();
    });

    it ('should return a JSON object', function(done) {
      api
        .get('/api/restaurants')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.body).to.be.an('object');
          done();
        });
    });
    it ('should return an array of restaurants', function(done) {
      api
        .get('/api/restaurants')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.body.restaurants).to.be.an('object');
          done();
        });
    });

  });
});
