"use strict";

const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true
    },
    thumbnail: {
      type: String,
      trim: true
    },
    year: {
      type: Number
    },
    description: {
      type: String,
      trim: true
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
      type: String,
      trim: true
    },
    isbn: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const findByIsbnStatic = require("./statics/find-by-isbn");
const createBookStatic = require("./statics/create");

bookSchema.statics.findByIsbn = findByIsbnStatic;
bookSchema.statics.createBook = createBookStatic;

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
