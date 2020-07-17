const orm = require("./../config/orm.js")
const getAllBurgers = (cb) => {
    orm.selectAll(cb)

}
const addBurger = (burgerName, cb) => {
    orm.inserOne(burgerName, cb)

}
const setBurgerDevour = (id, cb) => {
    orm.updateOne(true, id, cb)

}

module.exports = {
    getAllBurgers,
    addBurger,
    setBurgerDevour
}