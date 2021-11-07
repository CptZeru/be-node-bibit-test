const request = require('supertest')
const express = require('express')

const app = new express();
require("../routes/omdb.routes")(app);

describe('OMDB Test', function () {

  test('responds to /api/movies/search', async () => {
    const res = await request(app).get('/api/movies/search?search=Guardian');
    expect(res.statusCode).toBe(200);
  });
  
  test('responds to /api/movies/detail', async () => {
    const res = await request(app).get('/api/movies/detail?id=tt3896198'); 
    expect(res.statusCode).toBe(200);
  });

});