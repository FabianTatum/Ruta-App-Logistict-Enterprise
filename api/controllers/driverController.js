const DriverModel = require('../models/driverModel')

const DriverController = () => {}

DriverController.getAll = (req, res) => {
    DriverModel.getAll(
        (err, data) => {
            if(err){
                console.log("Error en traer elementos")
                throw err 
            }else{
                res.json(data)
            }
        }
    )
}

DriverController.getOne = () => {}

DriverController.insert = (req, res) => {
    let driver = {
        id: req.body.id,
        name: req.body.name,
        lastName: req.body.lastName,
        dateOfBirth: req.body.dateOfBirth,
        identification: req.body.identification,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password,
        terms: req.body.terms
    }
    DriverModel.insert(driver, 
        (err) => {
            if(err){
                console.log("Error de insertado");
                throw (err)
            }else{
                res.redirect('/')
            }
        }
    ) 
}

DriverController.update = () => {}
DriverController.delete = () => {}

module.exports = DriverController