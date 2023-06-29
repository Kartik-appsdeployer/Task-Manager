const express = require('express')
const router = express.Router()
const AddBucket = require('./addBucket')
const GetAllBucket = require('./getAllBuckets')
const DeleteBucket = require('./deleteBucket');
const AddDescription = require('./addDescription')


router.use('/addBucket', AddBucket)
router.use('/getAllBuckets', GetAllBucket)
router.use('/deleteBucket', DeleteBucket);
router.use('/addDescription', AddDescription)

module.exports = router