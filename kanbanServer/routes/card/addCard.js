const express = require('express')
const router = express.Router()

router.use('/', async (req, res) => {
    res.json({message: "Done"})
})

module.exports = router