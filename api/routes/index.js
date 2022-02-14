const express = require('express') 
const clientRouter = require('./clientRoutes')
const driverRouter = require('./driverRoutes')
const router = express.Router()

router
    .get('/', (req, res) => {
        res.end('Entrada app')
    })
    .use( '/drivers', driverRouter )
    .use( '/clients', clientRouter )

module.exports = router