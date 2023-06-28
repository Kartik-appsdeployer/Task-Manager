const express = require('express')
const router = express.Router()
const CardDB = require('../../models/cards')
const BucketDB = require('../../models/bucket')

router.post('/', async (req, res) => {
    const {cardName, bucketId} = req.body;
    console.log(bucketId, "BucketId");
    CardDB.create({
        cardName: cardName,
        buckedId: bucketId
    }).then((obj) => {
        BucketDB.findByIdAndUpdate(
            { _id: bucketId },
            { $push: { cards: { cardName: obj.cardName, cardId: obj._id } } }
          ).then(() => {
            console.log("Card Add")
          });
        res.json({success: true, message: "Task Added"})
    })

})

module.exports = router