const mysql = require('mysql')
const conf = require('./dbConf.json')

const myConn = mysql.createConnection(conf.mysql)

myConn.connect(
    (err) => {
        return err ? console.error(err) : console.log(`Conexion establecida por id ${myConn.threadId}`)
    }
)

module.exports = myConn
