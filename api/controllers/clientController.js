const ClientModel = require('../models/clientModel')

const ClientController = () => {}

ClientController.getAll = (req, res) => {}
ClientController.getOne = (req, res) => {}

ClientController.insert = (req, res) => {
    let client = {
        id: req.body.id,
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