const express = require('express')
const router = express.Router()
const {getLocationResults, getMethodResults} = require('../controllers/resultsController')

router.post('/location', getLocationResults)
router.post('/method', getMethodResults)


module.exports = router