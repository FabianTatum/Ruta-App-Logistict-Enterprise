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
                res.end()
            }
        }
    )
}

DriverController.getOne = (req, res) => {
    let id = req.params.id
    DriverModel.getOne(id, 
        (err, data) => {
            if(err){
                console.log("Error en traer elemento")
                throw err 
            }else{
                res.json(data)
                res.end()
            }           
        }
    )
}

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

DriverController.update = (req, res) => {
    let { id, name, lastName, dateOfBirth, identification, email,
            phone, password, terms } = req.body
    let driver = {
        id,
        name,
        lastName,
        dateOfBirth,
        identification,
        email,
        phone,
        password,
        terms
    }
    DriverModel.update([driver, driver.id], 
        (err) => {
             if(err){
                console.log("Error SQL")
                throw err 
            }else{
                res.end('Actualizado')
            }           
        }
    )
}

DriverController.delete = (req, res) => {
    let id = req.params.id
    DriverModel.delete(id, 
        (err) => {
             if(err){
                console.log("Error SQL")
                throw err 
            }else{
                res.end('Borrado')
            }           
        }
    )
}

module.exports = DriverController