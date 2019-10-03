"use strict";

const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String
  },
  thumbnail: {
    type: String
  },
  year: {
    type: Number
  },
  description: {
    type: String
  },
  authors: {
    type: [String]
  },
  category: {
    type: String,
    required: true,
    enum: ["HTML", "CSS", "JAVASCRIPT", "MONGODB", "NODE", "REACT", "EXPRESS"]
  },
  cover: {
    type: String
  },
  isbn: {
    type: String,
    required: true
  }
});

const findByIsbnStatic = require("./statics/find-by-isbn");
const createBookStatic = require("./statics/create");

bookSchema.statics.findByIsbn = findByIsbnStatic;
bookSchema.statics.createBook = createBookStatic;

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
