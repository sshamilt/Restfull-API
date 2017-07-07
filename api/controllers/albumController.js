'use strict';

var mongoose = require('mongoose'),
  Album = mongoose.model('Album');

exports.list_all_albums = function(req, res) {
  Album.find({}, function(err, album) {
    if (err)
      res.send(err);
    res.json(album);
  });
};

exports.create_album = function(req, res) {
  var new_album = new Album(req.body);
  new_album.save(function(err, album) {
    if (err)
      res.send(err);
    res.json(album);
  });
};

exports.read_album = function(req, res) {
  Album.findById(req.params.albumId, function(err, album) {
    if (err)
      res.send(err);
    res.json(album);
  });
};

exports.update_album = function(req, res) {
  Album.findOneAndUpdate({id: req.params.albumId}, req.body, {new: true}, function(err, album) {
    if (err)
      res.send(err);
    res.json(album);
  });
};

exports.delete_album = function(req, res) {
  Album.remove({
    id: req.params.albumId
  }, function(err, album) {
    if (err)
      res.send(err);
    res.json({ message: 'Album successfully deleted' });
  });
};

