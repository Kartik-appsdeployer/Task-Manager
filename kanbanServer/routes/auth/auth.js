const express = require('express')
const router = express.Router()
const Signin = require('./signin')
const Signup = require('./signup')

router.use('/signin', Signin)
router.use('/signup', Signup)

module.exports = router