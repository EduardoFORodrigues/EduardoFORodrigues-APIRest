//Exportando env tudo que está la
require('dotenv').config();

// importando express
const express = require('express');
// importanto cors
const cors = require('cors');
//importando routes para criação de rotas
const routes = require('../../routes');

// extanciando express
const app = express();

// deixando qualquer um acessando sem bloqueio requisição
app.use(cors());

// limitando quantidade de tamanho json()
app.use(express.json({limit:'50mb'}));
app.use(routes); 

module.exports = app;


//O "module.exports = app;" é mesma coisa que "export default app" no react