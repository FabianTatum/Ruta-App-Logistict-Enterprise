const express = require('express') 
const router = express.Router()
const ClientController = require('../controllers/clientController')


router
    .get('/', ClientController.getAll)
    .post('/', ClientController.insert)
    .get('/edit/:id', ClientController.getOne)
    .put('/edit/:id', ClientController.update)
    .delete('/delete/:id', ClientController.delete)

module.exports = router