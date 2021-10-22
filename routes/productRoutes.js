
// get all the controller required by the routes for handelling product
const express = require("express")
const router = express.Router()
const {create, readSingle,readAll,update,remove} = require('../controllers/productRoutes')


// setting all the routes
router.post('/create',create)
router.get('/read/:id',readSingle)
router.get('/read',readAll)
router.put('/update/:id',update)
router.get('/delete/:id',remove)


module.exports = router