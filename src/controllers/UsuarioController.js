class UsuarioController{

    login(req,res){
        return res.json({mensagem:"Usuário ou senha inválido!"})
    }
    obter(req,res){
        return res.json([{id:1, nome:"Eduardo"}])
    }
}
module.exports = UsuarioController;