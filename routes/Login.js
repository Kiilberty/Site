const express = require('express')
const router = express.Router()
const ChecaLogin = require('../controllers/Login.controller')

router.post('/',ChecaLogin)



module.exports = router