const request = require('supertest');
const app = require('../app');

describe('Test : Get all users', function() {
    it('responds with json', function(done) {
        request(app)
        .get('/api/users')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201, done);
    });
});
