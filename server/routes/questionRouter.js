const express = require('express')
const router = express.Router()
const {getLocationQuestion, getMethodQuestion, getLocationQuestions, getMethodQuestions} = require('../controllers/questionsController')

router.get('/location/:index', getLocationQuestion)
router.get('/method/:index', getMethodQuestion)
router.get('/locations', getMethodQuestions)
router.get('/methods', getLocationQuestions)


module.exports = router