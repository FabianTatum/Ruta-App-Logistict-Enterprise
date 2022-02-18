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

ClientController.getOne = (req, res) => {
    let id = req.params.id
    ClientModel.getOne( id,
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

ClientController.insert = (req, res) => {
    const { name, lastName, email,
            cityOfResidence, password } = req.body
    let client = {
        name,
        lastName,
        email,
        cityOfResidence,
        password,
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

ClientController.update = (req, res) => {
    const { id, name, lastName, email, 
        cityOfResidence, password } = req.body
    let client = {
        id,
        name,
        lastName,
        email,
        cityOfResidence,
        password
    }
    ClientModel.update( [client, client.id],
         (err) => {
             if(err){
                console.log("Error SQL")
                throw err
            }else{
                res.end('Completado')
            }
        }
    )
}

ClientController.delete = (req, res) => {
    let { id } = req.params
    ClientModel.delete( id, 
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

module.exports = ClientController