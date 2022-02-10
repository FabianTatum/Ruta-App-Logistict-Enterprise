const conn = require('./dbConnect')

const ClientModel = () => {}

ClientModel.getAll = () => {}
ClientModel.getOne = () => {}

ClientModel.insert = (data, cb) => {
    conn.query('INSERT INTO clients SET ?', data, cb )
}

ClientModel.update = () => {}
ClientModel.delete = () => {}

module.exports = ClientModel