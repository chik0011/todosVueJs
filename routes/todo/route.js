const express = require('express');
const router = express.Router();

//const todoCtrl = require('../controllers/todos');
const todoCtrl = require('../../controllers/todo/TodoController.js');

router.get('/', todoCtrl.list);

router.get('/:id', todoCtrl.getOneItem);
router.post('/', todoCtrl.postItem);
router.patch('/:id', todoCtrl.patchItem);
router.delete('/:id', todoCtrl.deleteItem);
router.put('/:id', todoCtrl.updateItem)

module.exports = router;
