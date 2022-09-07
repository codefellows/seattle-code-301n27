// LAB 11 - FEATURED TASKS
// Build a Mongoose 'Book' schema with valid keys for `title`, `description`, and `status`. 
// Use your schema to craft a Book model.
// Modularize your code by putting your schema and model in its own separate file and requiring the schema into your server.

'use strict';

const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, uppercase: true, enum: ['LIFE-CHANGING', 'FAVORITE FIVE', 'RECOMMENDED TO ME'] },
  email: { type: String, required: true } // lab 15
});

const bookModel = mongoose.model('book', bookSchema);

module.exports = bookModel;