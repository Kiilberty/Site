const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

router.get('/', (req,res) => {
    res.render('main/demo',{style:'Demo.css'})
})


module.exports = router