const express = require('express')
const app = express()

app.get('/api',(req,res) => {
    res.json({
        "users": ["userOne","userTwo","userThree","user4"]
    })
})

app.listen(5000, () => {
    console.log("Server started on Port 5000")
} )