'use strict';
var express = require('express'),
    router = express.Router()


var album = require('../controllers/albumController');

router.get('/album', album.list_all_albums)
router.post('/album', album.create_album);

router.get('/album/:albumId', album.read_album)
router.put('/album/:albumId', album.update_album)
router.delete('/album/:albumId', album.delete_album);

module.exports = router