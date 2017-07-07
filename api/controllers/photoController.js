'use strict';


var mongoose = require('mongoose'),
  Photo = mongoose.model('Photo');

exports.list_all_photos = function(req, res) {
  Photo.find({}, function(err, photo) {
    if (err)
      res.send(err);
    res.json(photo);
  });
};

exports.create_photo = function(req, res) {
  var new_photo = new Photo(req.body);
  new_photo.save(function(err, photo) {
    if (err)
      res.send(err);
    res.json(photo);
  });
};

exports.read_photo = function(req, res) {
  Photo.findById(req.params.photoId, function(err, photo) {
    if (err)
      res.send(err);
    res.json(photo);
  });
};

exports.update_photo = function(req, res) {
  Photo.findOneAndUpdate({_id: req.params.photoId}, req.body, {new: true}, function(err, photo) {
    if (err)
      res.send(err);
    res.json(photo);
  });
};

exports.delete_photo = function(req, res) {
  Photo.remove({
    _id: req.params.photoId
  }, function(err, photo) {
    if (err)
      res.send(err);
    res.json({ message: 'Photo successfully deleted' });
  });
};

