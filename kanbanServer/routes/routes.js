const express = require('express')
const router = express.Router()
const Auth = require('./auth/auth')
const Bucket = require('./bucket/bucket')
const Card = require('./card/cards')

router.use('/auth', Auth)
router.use('/bucket', Bucket)
router.use('/card', Card)

module.exports = router;