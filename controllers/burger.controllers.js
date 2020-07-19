const express = require("express")
const burgersJS = require("./../modles/burger.js")

let router = express.Router()

const renderIndex = (res) => {

    burgersJS.getAllBurgers((err, response) => {
        if (err) {
            return (response.send(err.toString()))

        }
        res.render("index", {
            burgers: response

        })
    })
}

router.get("/", (req, res) => {
    renderIndex(res)
})


router.post("/submit", (req, res) => {
    const burgerName = req.body.burgerName
    burgersJS.addBurger(burgerName, (err, results) => {
        if (err) {
            return (response.send(err.toString()))

        }
        renderIndex(res)

    })
})

router.get("/devour/:id", (req, res) => {
    const id = parseInt(req.params.id)
    burgersJS.setBurgerDevour(id, (err, results) => {
        if (err) { return (response.send(err.toString())) }
        renderIndex(res)
    })
})


module.exports = router
