const { json } = require("express")
const express = require("express")
const PORT =  process.env.PORT || 3001
const app = express()
const mysql = require('mysql2')


app.use(express.urlencoded({
    extended: true
}));

// const db = mysql.createConnection({
    
// })

const dbPool = mysql.createPool({

})
  

app.post("/submitHS", (req, res) => {
    console.log(req.body)

})

app.get("/geths", (req, res) => {

    dbPool.query("SELECT * FROM highscores", (err, results, fields) => {

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