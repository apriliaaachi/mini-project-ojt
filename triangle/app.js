var express = require('express')
var router = express()
var bodyParser = require('body-parser')

/* router */
var protection = require('./protection')
var credential = require('./credential')
var specify = require('./specify')

/* Body Parser */
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))

/* use Function */
router.use('/protection', protection)
router.use('/', credential)
router.use('/specify', specify)

module.exports = router