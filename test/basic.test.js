const app = require('./../index');
const chai = require('chai');
chai.use(require('chai-dom'));
const expect = chai.expect;
const request = require('supertest');

describe('Basic integration test', function() {
  describe('GET index', function() { 
    it('should get index page', function(done) { 
      request(app).get('/')
        .end(function(err, res) { 
          expect(res.statusCode).to.equal(200); 
          done(); 
        }); 
    });
  });

describe('GET html', function() { 
    it('should get html content', function(done) { 
      request(app).get('/')
        .end(function(err, res) {
          expect(res.text).to.exist;
          done(); 
        }); 
    });
  });
});