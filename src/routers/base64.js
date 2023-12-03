const express = require('express')
const router = express.Router()

/**
 * API to encode input to Base64 
 */
router.get('/encode/:input', (req, res) => {
    let outString = Buffer.from(req.params.input).toString('base64')
    res.status(200).send({
        'base64encoded': outString
    })
})

/**
 * API to decode Base64 encoded String
 */
router.get('/decode/:input', (req, res) => {
    let decoded = Buffer.from(req.params.input, 'base64').toString('utf-8')
    res.status(200).send({
        'base64decoded': decoded
    })
})

module.exports = router