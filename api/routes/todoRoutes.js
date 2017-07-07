'use strict';
var express = require('express'),
    router = express.Router()

var todo = require('../controllers/todoController');

router.get('/todo', todo.list_all_todos)
router.post('/todo', todo.create_todo);

router.get('/todo/:todoId', todo.read_todo)
router.put('/todo/:todoId', todo.update_todo)
router.delete('/todo/:todoId', todo.delete_todo);

module.exports = router