const ClientModel = require('../models/clientModel')

const ClientController = () => {}

ClientController.getAll = (req, res) => {
    ClientModel.getAll(
        (err, data) => {
            if(err){
                console.log("Error SQL")
                throw err
            }else{
                res.json(data)
                res.end()
            }
        }
    )
}

ClientController.getOne = (req, res) => {}

ClientController.insert = (req, res) => {
    let client = {
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
        cityOfResidence: req.body.cityOfResidence,
        password: req.body.password,
    }
    ClientModel.insert(client, 
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

ClientController.update = (req, res) => {}
ClientController.delete = (req, res) => {}

module.exports = ClientController