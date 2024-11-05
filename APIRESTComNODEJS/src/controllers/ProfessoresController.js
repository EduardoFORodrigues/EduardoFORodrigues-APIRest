class ProfessorController{
    login(req, res){
        return  res.json({mensagem:"Professor ou senha inválidos"})
    }
    obter(req,res){
        return res.json([{id:1,nome:"Ricardo"}])
    }
    adicionar(res, rea){

    }
    atuaalizar(res,req){

    }
    inativar(res,req){

    }

}
module.exports = ProfessorController