const express = require('express')
const router = express.Router()
const AddCard = require('./addCard')
const GetAllCards = require('./getAllCards')

router.use('/addCard', AddCard)
router.use('/getAllCards', GetAllCards);

module.exports = router