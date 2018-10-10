const assert = require('assert');
const User = require('../models/user');

describe('Saving records', function() {

  it('saves a record of a user to the database', function(done) {

    var user = new User({
      username: 'Bob',
      email: 'bob@email.com',
      password: 'pa55word'
    });

    user.save().then(function() {
      assert(user.isNew === false);
      done();
    });

  });

  //next test

});
