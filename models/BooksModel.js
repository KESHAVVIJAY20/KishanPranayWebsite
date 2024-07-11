const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    genre: String,
    description: String,
    cover: String,
    pageTitle: String,
    dateCreated: {
      type: Date,
      default: Date.now // Automatically set to the current date when a user is created
    }
  });
const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
