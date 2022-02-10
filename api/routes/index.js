const express = require('express') 
const router = express.Router()
const DriverController = require('../controllers/driverController')
const ClientController = require('../controllers/clientController')

router
    .get('/', DriverController.getAll)
    .post('/drivers', DriverController.insert)
    .post('/clients', ClientController.insert)
    

module.exports = router