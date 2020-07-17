const source = require("mysql")
const con = source.createConnection(process.env.DATABASE)
module.exports = con