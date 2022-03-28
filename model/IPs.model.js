const { string } = require('joi');
const mongoose = require('mongoose');

const IPsSheme = mongoose.Schema(
  {
    date: {
      type: String
    },
    ip: {
      type: String
    },
    routePath: {
      type: String
    }
  }
);

module.exports = mongoose.model('IPs',IPsSheme);

