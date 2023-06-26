const express = require('express')
const router = express.Router()
const Auth = require('./auth/auth')

router.use('/auth', Auth)

module.exports = router;