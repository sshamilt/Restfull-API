'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PhotoSchema = new Schema({
    albumId: Number,
    id: Number,
    title: String,
    url: String,
    thumbnailUrl: String,
    create_date: {
        type: Date,
        default: Date.now
    }
}, { collection: 'Photo' });

module.exports = mongoose.model('Photo', PhotoSchema);