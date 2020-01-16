// importando apenas as rotas do express.
const {Router} = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();


// Tipos de parâmetros:
// Query Paramns: request.query(filtros, paginação e ordenação) normalmente utilizado no GET
// Route Paramns: request.params (Identificar um recurso na alteração ou na remoção)
// Body: request.body (dados para criação ou alteração de um registro)


routes.get('/devs', DevController.index)

// Requisição do front e a resposta do back.
routes.post('/devs' , DevController.store);

routes.get('/search', SearchController.index);



// exportando as rotas
module.exports = routes;