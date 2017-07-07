'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CommentSchema = new Schema({
    id: Number,
    postId: Number,
    name: String,
    email: String,
    body: String,
    create_date: {
        type: Date,
        default: Date.now
    }
}, { collection: 'Comment' });

module.exports = mongoose.model('Comment', CommentSchema);