// CONFIGURANDO AMBIENTE
let ambiente = undefined;
switch(process.env.PUBLICAR){
    case "HTML": ambiente = configurarHML();
}


//ambiente de Homolocação
function configurardoHML(){

    return{
        dialect:process.env.HML_DIALECT,
        host:process.env.HTML_HOST,
        port:process.env.HTML_PORT,
        username:process.env.HTML_USER_NAME,
        password:process.env.HTML_PASSWORD,
        database:process.env.Html_DATABASE,
        define:{
            timestamps:true,
            undercored:true,
        }
        
    
    }
}

// ambiente de Produtção
function configurarPROD(){
    return{
        dialect:process.env.PROD_DIALECT,
        host:process.env.PROD_HOST,
        port:process.env.PROD_PORT,
        username:process.env.PROD_USER_NAME,
        password:process.env.PROD_PASSWORD,
        database:process.env.PROD_DATABASE,
        define:{
            timestamps:true,
            undercored:true,
        }
        
    
    }

}

//mbiente de  Local

function configurarLOCAL(){

    return{
        dialect:process.env.LOCAL_DIALECT,
        host:process.env.LOCAL_HOST,
        port:process.env.LOCAL_PORT,
        username:process.env.LOCAL_USER_NAME,
        password:process.env.LOCAL_PASSWORD,
        database:process.env.LOCAL_DATABASE,
        define:{
            timestamps:true,
            undercored:true,
        }
        
    
    }

}

module.exports = ambiente;