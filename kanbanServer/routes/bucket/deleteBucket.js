const express = require('express')
const router = express.Router()
const BucketDB = require('../../models/bucket')

router.delete('/:id', async (req, res) => {
    BucketDB.findByIdAndDelete({_id: req.params.id}).then(() => {
        res.json({success: true, message: "Deleted Bucket"})
    })
})

module.exports = router;