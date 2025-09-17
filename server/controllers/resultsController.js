const {getStudyMethod, getStudyLocation} = require('../lib/openaiAPI')





const getLocationResults = async (req, res) => {
    const {answers} = req.body
    const result = await getStudyLocation(answers)
    res.json(result)
} 

const getMethodResults = async (req, res) => {
    const {answers} = req.body
    const result = await getStudyMethod(answers)
    res.status(200).json(result)
} 


module.exports = {getLocationResults, getMethodResults}