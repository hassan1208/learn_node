const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send("Goals")
})


module.exports = router