const mongoose = require("mongoose")
const dotenv = require('dotenv')

dotenv.config()

const urlSite = process.env.URL_SITE
const urlAgenda = process.env.URL_AGENDA


const connect = () => {
    mongoose.connect(urlSite)
    const connection = mongoose.connection
    connection.on('error',()=>{
        console.error("Erro ao se conectar com o mongodb")
    })

    connection.on('open',()=>{
        console.log("Sucesso!")
    })
}


    const con = mongoose.createConnection(urlAgenda)

    if(con){
        console.log('conectado')
    }else{
        console.log('falha')
    }







connect();

module.exports = {
    mongoose,
    con
}