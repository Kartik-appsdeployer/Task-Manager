const express = require('express')
const router = express.Router()
const AddBucket = require('./addBucket')
const GetAllBucket = require('./getAllBuckets')


router.use('/addBucket', AddBucket)
router.use('/getAllBuckets', GetAllBucket)

module.exports = router