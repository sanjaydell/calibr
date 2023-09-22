const mongoose = require('mongoose');

// Defining schema for the book data
const boohSchema = new mongoose.Schema({
  title: String,
  author: String,
  publicationYear: Number,
  isbn: String,
  description: String,
});

// Creating a model using the schema
const Book = mongoose.model('book', boohSchema);

module.exports = Book;