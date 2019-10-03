"use strict";

const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
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
    type: String
  },
  category: {
    type: String,
    required: true,
    enum: []
  }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
