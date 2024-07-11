const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  Username: { type: String, required: true },
  Usermail: { type: String, required: true, unique: true },
  dateJoined: {
    type: Date,
    default: Date.now // Automatically set to the current date when a user is created
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;