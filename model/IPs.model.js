const { string, boolean } = require('joi');
const mongoose = require('mongoose');

const IPsSheme = mongoose.Schema({
  date: {
    type: Date,
    default: Date.now 
  },
  ip: {
    type: String
  },
  url: {
    type: String
  }, 
  reloaded: {
    type: Boolean
  }
});

module.exports = mongoose.model('IPs',IPsSheme);

