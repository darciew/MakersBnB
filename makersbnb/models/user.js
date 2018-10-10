var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Create Schema and Model

const UserSchema = new Schema({
  username: String,
  email: String,
  password: String
});

const User = mongoose.model('user', UserSchema);

module.exports = User; 
