'use strict';
const superTest = require('supertest');
const server = require('../src/server');
const request = superTest(server.app);

describe('validator test', () => {

    it('handle working routes', async() => {
        const response = await request.get('/person').query({ name: 'boodah' });
        expect(response.status).toEqual(200);
    });
    it('handle working routes', async() => {
        const response = await request.get('/person');
        expect(response.status).toEqual(500);

    });

});