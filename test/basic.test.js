const app = require('./../index');
const expect = require('chai').expect;
const request = require('supertest');

describe('Basic integration test', function() {
  describe('GET index', function() { 
    it('should get index page', function(done) { 
      request(app).get('/')
        .end(function(err, res) { 
          expect(res.statusCode).to.equal(200); 
          // expect(res.body).to.be.an('array'); 
          // expect(res.body).to.be.empty;
          done(); 
        }); 
    });
  });
});