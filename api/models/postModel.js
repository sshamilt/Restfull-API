'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PostSchema = new Schema({
    id: Number,
    title: String,
    body: String,
    userId: Number,
    create_date: {
        type: Date,
        default: Date.now
    }
}, { collection: 'Post' });

module.exports = mongoose.model('Post', PostSchema);