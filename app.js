const express = require('express')
const app = express()
const mysql = require('mysql')


app.get("/", (req, res) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '0000',
        database: 'leilao'
    })
    connection.connect()
    
    connection.query("SELECT * FROM lotes", (err, rows, fields) => {
        res.json(rows)
    })
    connection.end()
})

app.listen(8081, () => {
    console.log("servidor iniciado")
})