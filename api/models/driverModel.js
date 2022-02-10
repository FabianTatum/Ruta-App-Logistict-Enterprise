const conn = require('./dbConnect')

const DriverModel = () => {}

DriverModel.getAll = (cb) => {
    conn.query('SELECT * FROM drivers', cb)
}

DriverModel.getOne = () => {}

DriverModel.insert = (data, cb) => {
    conn.query('INSERT INTO drivers SET ?', data, cb)
}

DriverModel.update = () => {}
DriverModel.delete = () => {}

module.exports = DriverModel