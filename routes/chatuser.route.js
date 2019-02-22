const express = require('express')
const router = express.Router()

const controller = require('../controllers/chatuser.controller')

router.get('/', controller.get_all_users)
router.post('/', controller.create_user)
router.get('/:uid', controller.get_user)

module.exports = router
