'use strict';
var express = require('express'),
    router = express.Router()


var comment = require('../controllers/commentController');

router.get('/comment', comment.list_all_comments)
router.post('/comment', comment.create_comment);

router.get('/comment/:commentId', comment.read_comment)
router.put('/comment/:commentId', comment.update_comment)
router.delete('/comment/:commentId', comment.delete_comment);

module.exports = router