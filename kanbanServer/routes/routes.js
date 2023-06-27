const express = require('express')
const router = express.Router()
const Auth = require('./auth/auth')
const Bucket = require('./bucket/bucket')

router.use('/auth', Auth)
router.use('/bucket', Bucket)

module.exports = router;