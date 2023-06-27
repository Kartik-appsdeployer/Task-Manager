const express = require('express')
const router = express.Router()
const BucketDB = require('../../models/bucket')

router.get('/', async (req, res) => {
    BucketDB.find().then((obj) => {
        res.json({success: true, data: obj})
    }).catch((err) => {
        res.json({success: false, message: err});
    })
})

module.exports = router