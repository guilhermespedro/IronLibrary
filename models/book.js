"use strict";

const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
