const express = require('express')
const router = express.Router()
const BucketDB = require('../../models/bucket')

router.put('/', async (req, res) => {
    // Assuming you have the bucketId and cardId available
    const { bucketId, cardId, cardDesc } = req.body;
    BucketDB.findOneAndUpdate(
        { _id: bucketId, 'cards._id': cardId },
        { $set: { 'cards.$.cardDesc': cardDesc } },
        { new: true }
    )
        .then(updatedBucket => {
            if (updatedBucket) {
                res.json({message: "Card description updated"})
            } else {
                res.json({message: "Bucket or card not found."})
            }
        })
        .catch(error => {
            res.json({message: error})
        });
})

module.exports = router