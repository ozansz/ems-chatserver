const ChatUser = require('../models/chatuser.model')

exports.get_all_users = (req, res, next) => {
  res.json({
    msg: 'Get All Users'
  })
}

exports.get_user = (req, res, next) => {
  res.json({
    msg: 'Get User'
  })
}

exports.create_user = (req, res, next) => {
  res.json({
    msg: 'Create User'
  })
}
