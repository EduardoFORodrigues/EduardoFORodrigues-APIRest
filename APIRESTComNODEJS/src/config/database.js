// CONFIGURANDO AMBIENTE
let ambiente = undefined;


//ambiente de Homolocação
function configurardoHML(){

    return{
        dialect:process.env.HML_DIALECT,
        host:process.env.HTML_HOST,
        port:process.env.HTML_PORT,
        username:process.env.HTML_USER_NAME,
        password:process.env.HTML_PASSWORD,
        database:process.env.Html_DATABASE,
        
    
    }
}

// ambiente de Produtção
function configurarPROD(){

}

//mbiente de  Local

function configurarLOCAL(){

}