const express = require('express');
const router = express.Router(); //"router está instanciando uma função do express"
const mentionsController = require('../controllers/mentions-controller');

router.get('/', mentionsController.listMentions); //busca informação
router.post('/', mentionsController.createMention); //manda coisa para o servidor

module.exports = router;
