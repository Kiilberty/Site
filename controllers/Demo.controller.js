const demoService = require('../services/Demo.service')


const createDemo = async (req,res)=>{
  const NomeRecebido = req.body.PrimeiroNome
  const SobrenomeRecebido = req.body.Sobrenome
  const TelefoneRecebido = req.body.Telefone
  const EmailRecebido = req.body.Email
  const AtividadeRecebida = req.body.Atividade
  var MensagemRecebida = req.body.Mensagem
  const CgcRecebido = req.body.Cgc

  if(!MensagemRecebida){
      MensagemRecebida = "Apresentar sistema ao cliente"
  }
  
  
    const create = await demoService.createDemo({
      Nome:NomeRecebido,
      Sobrenome:SobrenomeRecebido,
      Cgc:CgcRecebido,
      Numero:TelefoneRecebido,
      Email:EmailRecebido,
      Atividade:AtividadeRecebida,
      Mensagem:MensagemRecebida
      
      
    })
    
  res.send('Solicitação Realizada!')









}


module.exports = createDemo