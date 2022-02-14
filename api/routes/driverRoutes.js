const express = require('express') 
const router = express.Router()
const DriverController = require('../controllers/driverController')

router
    .get('/', DriverController.getAll)
    .post('/', DriverController.insert)

module.exports = router
