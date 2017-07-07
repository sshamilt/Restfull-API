'use strict';


var mongoose = require('mongoose'),
  Comment = mongoose.model('Comment');

exports.list_all_comments = function(req, res) {
  Comment.find({}, function(err, comment) {
    if (err)
      res.send(err);
    res.json(comment);
  });
};

exports.create_comment = function(req, res) {
  var new_comment = new Comment(req.body);
  new_comment.save(function(err, comment) {
    if (err)
      res.send(err);
    res.json(comment);
  });
};

exports.read_comment = function(req, res) {
  Comment.findById(req.params.commentId, function(err, comment) {
    if (err)
      res.send(err);
    res.json(comment);
  });
};

exports.update_comment = function(req, res) {
  Comment.findOneAndUpdate({_id: req.params.commentId}, req.body, {new: true}, function(err, comment) {
    if (err)
      res.send(err);
    res.json(comment);
  });
};

exports.delete_comment = function(req, res) {
  Comment.remove({
    _id: req.params.commentId
  }, function(err, comment) {
    if (err)
      res.send(err);
    res.json({ message: 'Comment successfully deleted' });
  });
};

