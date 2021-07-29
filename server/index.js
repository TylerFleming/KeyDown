const { json } = require("express")
const express = require("express")
const PORT =  process.env.PORT || 3001
const app = express()
const mysql = require('mysql2')


app.use(express.json({
    extended: true
}));


const dbPool = mysql.createPool({

})


app.post("/submitHS", (req, res) => {
    let data = req.body;
    const { user, wpm } = data
    dbPool.query(`INSERT INTO highscores (name, wpm) values ('${user}', ${wpm})`, (err, results, fields) => {
        console.log(user, wpm)
        if (err) {
            res.json({
                message: 'There was an error!'
            })
            console.log(err)
        } else {
            res.json({
                message: 'Highscore submitted!'
            })
        }
    })

})

app.get("/geths", (req, res) => {

    dbPool.query("SELECT name, wpm FROM highscores ORDER BY wpm DESC", (err, results, fields) => {

        if ( err ) {
            res.json({
                message: `there was an error ${err}`
            })
        } else {
            res.json({
                message: results
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