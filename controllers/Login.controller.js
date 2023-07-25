const LoginService = require('../services/Login.service')
const bcrypt = require('bcrypt')

const LoginController = async (req,res) =>{
    const Email = req.body.user
    const Senha = req.body.password
  
   

   try {
      const ChecaLogin = await LoginService(Email)
      if(ChecaLogin){
        const Valida = bcrypt.compareSync(Senha,ChecaLogin.Senha)
        if(Valida){
            res.send('Login Efetuado!')
        }else{
            res.send('Usuário ou Senha incorretos')
        }
      }else{
        res.send('Usuário não Cadastrado')
      }

    
   } catch (error) {
    res.status(500).send(error.message)
    
   }



}



module.exports = LoginController