const request = require('supertest');
const app = require('../app');

describe('Test : Get all users', function() {
    it('responds with json', function(done) {
        request(app)
        .get('/api/users')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
});

describe('Test : Get a user with his id', function() {
    it('responds with json', function(done) {
        request(app)
        .get('/api/users/1')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
});

describe('Test : Create a user', function() {
    it('responds with json', function(done) {
        request(app)
        .post('/api/createuser')
        .field('firstname', 'Marcel_test')
        .field('lastname', 'DUPONT_test')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201, done);
    });
});

describe('Test : Update a user', function() {
    it('responds with json', function(done) {
        request(app)
        .put('/api/updateuser')
        .field('id', '10')
        .field('firstname', 'Marcel_update')
        .field('lastname', 'DUPONT_update')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
});

describe('Test : Delete a user', function() {
    it('responds with json', function(done) {
        request(app)
        .delete('/api/deleteuser')
        .field('id', '10')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
});
