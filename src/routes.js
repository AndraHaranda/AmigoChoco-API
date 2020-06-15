const { Router } = require('express');
const auth = require('./middleware/auth');

const PessoaController = require('./Controller/PessoaController');
const LoginController = require('./Controller/LoginController');
const CursoController = require('./Controller/CursoController');
const MatriculaController = require('./Controller/MatriculaController');
const GrupoController = require('./Controller/GrupoController');

const routes = Router();

//---------------------ROTAS--------------------

routes.post('/token', LoginController.geraToken);

routes.get('/pessoa', PessoaController.index);
routes.get('/pessoa/:cpf', auth, PessoaController.getPessoa);
routes.post('/pessoa', PessoaController.create);
routes.put('/pessoa', PessoaController.edit);
routes.put('/pessoa/addHobie/:cpf', PessoaController.addHobie);
routes.delete('/pessoa', PessoaController.delete);

routes.get('/curso', CursoController.index);
routes.get('/curso/:id', CursoController.getCurso);
routes.post('/curso', CursoController.create);
routes.put('/curso', CursoController.edit);
routes.delete('/curso', CursoController.delete);

routes.get('/grupo', GrupoController.index);
routes.get('/grupo/:id', GrupoController.getGrupo);
routes.post('/grupo', GrupoController.create);
routes.put('/grupo', GrupoController.edit);
routes.delete('/grupo', GrupoController.delete);

routes.post('/matricula/:cpf', MatriculaController.matricular);
routes.get('/matricula/:cpf', MatriculaController.cursosMatriculados);


module.exports = routes