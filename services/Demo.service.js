const DemoAgenda = require('../models/DemoModel')




const createDemo =(body) => DemoAgenda.create(body)


module.exports = {
    createDemo
}