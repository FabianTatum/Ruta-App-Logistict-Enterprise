const conn = require('./dbConnect')

const ClientModel = () => {}

ClientModel.getAll = (cb) => {
    conn.query('SELECT * FROM clients', cb)
}

ClientModel.getOne = (id, cb) => {
    conn.query('SELECT * FROM clients WHERE id = ?', id ,cb)
}

ClientModel.insert = (data, cb) => {
    conn.query('INSERT INTO clients SET ?', data, cb )
}

ClientModel.update = ( [client, id], cb) => {
    conn.query('UPDATE clients SET ? WHERE id = ?', [client, id], cb)
}

ClientModel.delete = (id, cb) => {
    conn.query('DELETE FROM clients WHERE id = ?', id, cb)
}

module.exports = ClientModel