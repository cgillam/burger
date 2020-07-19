const express = require("express")
const expressHB = require("express-handlebars")
const mainRoute = require("./controllers/burger.controllers")
const bodyParser = require("body-parser")

const port = process.env.PORT || 8080

const app = express()
app.use(express.static("public"))
app.use(bodyParser.urlencoded({
    extended: true
}))
app.engine("handlebars", expressHB())
app.set("view engine", "handlebars")
app.use(mainRoute)


require("./config/connection").connect((err) => {
    if (err) {
        return (console.log(err))
    }
    app.listen(port, () => {
        console.log("listening @ http://localhost:" + port)

    })
})