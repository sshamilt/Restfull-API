'use strict';
var express = require('express'),
    router = express.Router()


var post = require('../controllers/postController');

router.get('/post', post.list_all_posts)
router.post('/post', post.create_post);

router.get('/post/:postId', post.read_post)
router.put('/post/:postId', post.update_post)
router.delete('/post/:postId', post.delete_post);

module.exports = router