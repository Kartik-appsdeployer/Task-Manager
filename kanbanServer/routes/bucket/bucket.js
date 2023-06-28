const express = require('express')
const router = express.Router()
const AddBucket = require('./addBucket')
const GetAllBucket = require('./getAllBuckets')
const DeleteBucket = require('./deleteBucket');


router.use('/addBucket', AddBucket)
router.use('/getAllBuckets', GetAllBucket)
router.use('/deleteBucket', DeleteBucket);

module.exports = router