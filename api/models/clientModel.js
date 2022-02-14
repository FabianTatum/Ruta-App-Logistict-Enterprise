const conn = require('./dbConnect')

const ClientModel = () => {}

ClientModel.getAll = (cb) => {
    conn.query('SELECT * FROM clients', cb)
}

ClientModel.getOne = () => {}

ClientModel.insert = (data, cb) => {
    conn.query('INSERT INTO clients SET ?', data, cb )
}

ClientModel.update = () => {}
ClientModel.delete = () => {}

module.exports = ClientModel