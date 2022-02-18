const conn = require('./dbConnect')

const DriverModel = () => {}

DriverModel.getAll = (cb) => {
    conn.query('SELECT * FROM drivers', cb)
}

DriverModel.getOne = (id, cb) => {
    conn.query('SELECT * FROM drivers WHERE id = ?', id, cb)
}

DriverModel.insert = (data, cb) => {
    conn.query('INSERT INTO drivers SET ?', data, cb)
}

DriverModel.update = ([driver, id], cb) => {
    conn.query('UPDATE drivers SET ? WHERE id = ?', [driver, id], cb)
}

DriverModel.delete = (id, cb) => {
    conn.query('DELETE FROM drivers WHERE id = ?', id, cb)
}

module.exports = DriverModel