const Login = require('../models/Usuarios')

const LoginService = (Email) =>Login.findOne({Email:Email}).select('+Senha')


module.exports = LoginService