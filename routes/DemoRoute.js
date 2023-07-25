const express = require('express')
const router = express.Router()
const CriaDemo = require('../controllers/Demo.controller') 



router.post('/',CriaDemo)



module.exports = router