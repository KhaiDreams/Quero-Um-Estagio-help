//IMPORTING
const express = require("express")
const cors = require("cors")

const app = express()

//IMPORTING - INTERNAL
const db = require("./config/database")
const routes = require("./routes/index")

//SETTING DB
db.pool

//SETTING CORS
const allowedOrigins = [
    "ENDEREÇO DO FRONTEND QUE VAI FAZER AS REQUISIÇÕES",
    "http://localhost:5500" //tests html address (postman)
]

app.use(cors({
    origin: (origin, callback) => {
        let allowed = true

        if(!origin) allowed = true //mobile apps
        if(!allowedOrigins.includes(origin)) allowed = false //servers

        callback(null, allowed)
    }
}))

//ENABLING SERVER TO RECEIVE JSON DATA VIA POST METHOD
app.use(express.json())

//DEFINING ROUTES
app.use("/", routes)

//SETTING SERVER
const port = process.env.port || 8080
app.listen(port, () => console.log(`Server on. Port: ${port}`))