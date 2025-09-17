const express = require('express');
const app = express();
const questionRouter = require('./routes/questionRouter')
const resultRouter = require('./routes/resultRouter')

app.use(express.json())

app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.use('/questions', questionRouter)

app.use('/results', resultRouter)


app.listen(3000, (req, res) => {
    console.log("server listening at port 3000, http://localhost:3000")
})