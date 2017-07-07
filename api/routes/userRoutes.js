'use strict';
var express = require('express'),
    router = express.Router()


var user = require('../controllers/userController');

router.get('/user', user.list_all_users)
router.post('/user', user.create_user);

router.get('/user/:userId', user.read_user)
router.put('/user/:userId', user.update_user)
router.delete('/user/:userId', user.delete_user);

module.exports = router