const con = require("./connection.js")
const selectAll = (cb) => {
    con.query("select * from burgers; ", (err, res) => {
        if (err) {
            return (cb(err, null))
        }
        cb(null, results)
    })
}
const inserOne = (burger_name, cb) => {
    con.query("insert into burgers (burger_name) values (?) ", [burger_name], cb)
}
const updateOne = (devoured, id, cb) => {
    con.query("update burgers set devoured = ? where id = ?", [devoured, id], cb)
}

module.exports = {
    updateOne, inserOne, selectAll
}