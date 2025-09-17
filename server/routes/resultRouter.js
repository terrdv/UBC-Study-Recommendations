const express = require('express')
const router = express.Router()
const {getLocationResults, getMethodResults} = require('../controllers/resultsController')

router.get('/location', getLocationResults)
router.get('/method', getMethodResults)


module.exports = router