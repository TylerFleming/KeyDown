const { json } = require("express")
const express = require("express")
const PORT =  process.env.PORT || 3001
const app = express()
const mysql = require('mysql2')

const db = mysql.createConnection({
    host: '',
    user: '',
    password: '',
    database: ''
})

app.get("/submitHS", (req, res) => {

   const hs = {
        name: 'test',
        wpm: 122
    }

    db.query("INSERT INTO highscores SET ?", hs, (err, result) => {
        if (err) {
            res.json({
                message: 'there was an error'
            })
        } else {
            res.json({
                message: `score of ${hs.wpm} submitted succesfully`
            })
        }
    })
})


app.get("/api", (req, res) => {
    res.json({
        message: 'this is a test'
    })
})

app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`)
})