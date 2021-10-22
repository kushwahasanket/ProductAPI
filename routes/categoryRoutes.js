
// get all the controller required by the routes for handelling category
const express = require("express")
const router = express.Router()
const {create} = require('../controllers/categoryRoutes')



router.post('/create',create)

module.exports = router