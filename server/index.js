const express = require('express');
const app = express();


app.use(express.json())


app.listen(3000, (req, res) => {
    console.log("server listening at port 3000, http://localhost:3000")
})