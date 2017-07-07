'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TodoSchema = new Schema({
  id: Number,
    title:String,
  completed: Boolean,
  userId: Number,
    create_date: {
        type: Date,
        default: Date.now
    }

    }, { collection: 'Todo' });

module.exports = mongoose.model('Todo', TodoSchema);