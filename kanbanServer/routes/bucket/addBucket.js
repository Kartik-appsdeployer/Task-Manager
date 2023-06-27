const express = require('express')
const router = express.Router()
const BucketDB = require('../../models/bucket')

router.post('/', async (req, res) => {
    
    const {bucketName, userId} = req.body;
    BucketDB.create({
        bucketName: bucketName,
        userId: userId
    }).then((obj) => {
        res.json({success: true, message: "Bucked Added"})
    })

})

module.exports = router