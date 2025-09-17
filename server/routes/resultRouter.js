const express = require('express')
const router = express.Router()
const {getLocationResults, getMethodResults} = require('../controllers/resultsController')

router.get('/location', getLocationResults)
router.post('/method', getMethodResults)


module.exports = router