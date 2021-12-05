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

describe('Test : Get a user with its id', function() {
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
        .send({
            firstname: 'Marcel_test',
            lastname: 'DUPONT_test'
        })
        .expect(201, done);
    });
});

describe('Test : Update a user', function() {
    it('responds with json', function(done) {
        request(app)
        .put('/api/updateuser')
        .type('form')
        .send({
            id: "1",
            firstname: "Marcel_test",
            lastname: "DUPONT_test",
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
});

describe('Test : Delete a user', function() {
    it('responds with json', function(done) {
        request(app)
        .delete('/api/deleteuser')
        .type('form')
        .send({
            id: "1",
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
});