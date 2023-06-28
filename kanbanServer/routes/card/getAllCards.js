const express = require('express')
const router = express.Router()
const CardDB = require('../../models/cards')


router.get('/', async (req, res) => {
    CardDB.find().then((obj) => {
        res.json({success: true, data: obj})
    }).catch((err) => {
        res.json({success: false, message: err});
    })
})

module.exports = router