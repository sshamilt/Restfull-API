'use strict';
var express = require('express'),
    router = express.Router()


var photo = require('../controllers/photoController');

router.get('/photo', photo.list_all_photos)
router.post('/photo', photo.create_photo);

router.get('/photo/:photoId', photo.read_photo)
router.put('/photo/:photoId', photo.update_photo)
router.delete('/photo/:photoId', photo.delete_photo);

module.exports = router