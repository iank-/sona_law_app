const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Case = new Schema({
  client_name: {
    type: String
  },
  case_limitation_date: {
    type: String
  }
},{
  collestion: 'case'
});

module.exports = mongoose.model('Case', Case);
