var app = require('../app');
var chai = require('chai');
var chaiHttp = require('chai-http');
let should = chai.should()


chai.use(chaiHttp);

describe("/GET users", function() {
  it('display users', function(done) {
    chai.request(app)
      .get('/users')
      .end(function(err, res) {
        res.should.have.status(200);
        res.body.should.be.eql(['Billy', 'Bobby', 'Barry']);
        done();
      });
  });
});

describe("/GET users/0", function() {
  it('displays first user', function(done) {
    chai.request(app)
      .get('/users/0')
      .end(function(err, res) {
        res.should.have.status(200);
        res.body.should.be.eql('Billy');
        done();
      });
  });
});

describe("/POST user", function() {
  it("adds a user", function(done) {
    let details = {"name": "Jim"}
    chai.request(app)
    .post('/users')
    .send(details)
    .end(function(err, res) {
      res.should.have.status(200);
      chai.request(app)
      .get('/users')
      .end(function(err, res) {
        res.should.have.status(200);
        done()
      });
    });
  });
});
