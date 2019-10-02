"use strict";

const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {},
  thumbnail: {},
  year: {},
  description: {},
  cover: {},
  authors: {},
  category: {}
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
