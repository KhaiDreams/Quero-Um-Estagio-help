//IMPORTING
const express = require("express")
const cors = require("cors")

const app = express()

//IMPORTING - INTERNAL
const db = "XANDE VAI IMPORTAR A DATABASE POR AQUI E DEPOIS QUE SETTAR ELA"
const routes = require("./routes")

//SETTING DB


//SETTING CORS
const allowedOrigins = [
    "ENDEREÇO DO FRONTEND QUE VAI FAZER AS REQUISIÇÕES",
    "http://localhost:5500" //tests html address (postman)
]

app.use(cors({
    origin: (origin, callback) => {
        let allowed = true

        //mobile apps
        if(!origin) allowed = true
        //servers
        if(!allowedOrigins.includes(origin)) allowed = false

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