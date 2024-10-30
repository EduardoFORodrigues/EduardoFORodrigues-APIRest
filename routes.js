//importando Express
const express = require('express');
//especificando meu arquivo de rotas
const routes = express.Router();

const UsuarioController = require('./src/controllers/UsuarioController') ;
//instância do UsuarioController
const usuarioController = new UsuarioController();


routes.post('/usuarios', usuarioController.login);
routes.get("/usuarios", usuarioController.obter);


const ProfessoresController = require('./src/controllers/ProfessoresController');
//instância do UsuarioController
const professoresController =  new ProfessoresController();

routes.post('/professores', professoresController.login);
routes.get("/professores", professoresController.obter)

module.exports = routes;
