var express = require('express');
var router = express.Router();
var IndexController = require('../controllers/IndexController');
// var AlunosController = require('../controllers/AlunosController');
// var TesteController = require('../controllers/TesteController');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/contato', IndexController.viewContato);
router.get('/confirmarcontato', IndexController.confirmarContato);

// router.get('/cadastroaluno', AlunosController.index);
// router.get('/dadosalunos', AlunosController.dadosalunos);

// router.get('/teste', TesteController.index);
// // router.put('/filme', TesteController.editar);

module.exports = router;
