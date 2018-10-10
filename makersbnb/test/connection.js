var mongoose = require('mongoose');

// connect to mongodb
mongoose.connect('mongodb://localhost/makersbnb');

mongoose.connection.once('open', function() { //once = event listener - 'once the connection is open'
  console.log('Connection has been made, now make fireworks...');
}).on('error', function(error){
  console.log('Connection error:', error);
});
