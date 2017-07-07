'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var AlbumSchema = new Schema({
    id: Number,
    title: String,
    userId: Number,
    create_date: {
        type: Date,
        default: Date.now
    }
}, { collection: 'Album' });

module.exports = mongoose.model('Album', AlbumSchema);