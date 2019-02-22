const mongoose = require('mongoose')

module.exports = mongoose.model('ChatUser', new mongoose.Schema({
  name: {
    type: String,
    required: true,
    max: 100
  },
  email: {
    type: String,
    required: true,
    max: 100
  },
  passwd: {
    type: String,
    required: true,
    max: 100
  },
  last_activity: {
    type: Date,
    required: false
  },
}))
