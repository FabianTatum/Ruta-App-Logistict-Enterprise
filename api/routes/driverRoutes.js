const express = require('express') 
const router = express.Router()
const DriverController = require('../controllers/driverController')

router
    .get('/', DriverController.getAll)
    .post('/', DriverController.insert)
    .get('/edit/:id', DriverController.getOne)
    .put('/edit/:id', DriverController.update)
    .delete('/delete/:id', DriverController.delete)



module.exports = router
