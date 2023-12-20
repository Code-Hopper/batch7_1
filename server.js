import express from "express"

import ejs from "ejs"

import bodyParser from "body-parser"

// importing models
import { router_1 } from "./router/router_1.js"

let app = express()

const port = 3001

app.use(express.json())

app.use(bodyParser.urlencoded({ extended: true }))

app.set("view engine", "ejs")

app.use(express.static("./public"))

app.use(router_1)

app.listen(port, () => {
    console.log(`Server is running on port : ${port}`)
})
