const mongoose  = require('mongoose')
const conecta = require('../database')
const userSchema = new mongoose.Schema({
      Razao:{
        type: String,
        required: true
        },
      Fantasia:{
        type: String,
        required: true
        },
      CGC:{
        type: Number,
        required: true,
        unique:true
        },
      Rua:{
        type: String,
        required: true
        },
      UF:{
        type: String,
        required: true
        },
      Bairro:{
        type: String,
        required: true
        },
      Numero:{
        type: Number,
        required: true
        },
      Usuario:{
        type: String,
        required: true,
        unique:true
        },
      Senha:{
        type: String,
        required: true
        },
      Telefone1:{
        type: Number,
        required: true
        },
      Telefone2:{
        type:  Number,
        required: true
        },
      CEP:{
        type: Number,
        required: true
        },
      Email:{
        type: String,
        required: true,
        unique:true
        },
      PontoRef:{
        type: String,
        },
      InscEstadual:{
        type: Number
        },
      Tipo:{
        type: String,
        required: true
        }
})


const Usuario = conecta.con.model('Usuarios',userSchema)

module.exports = Usuario