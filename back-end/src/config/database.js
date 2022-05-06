require("dotenv").config()
const mysql = require("mysql2")

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD
})

let query = "SELECT * FROM posts;"

pool.execute(query, function(err, res){
    if(err) throw err

    console.log(res)
})

module.exports = pool.promise()