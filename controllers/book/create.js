"use strict";

const Book = require("../../models/book");

module.exports = (req, res, next) => {
  const {
    title,
    thumbnail,
    year,
    description,
    authors,
    category,
    cover,
    isbn,
    price
  } = req.body;
  Book.createBook({
    title,
    thumbnail,
    year,
    description,
    authors,
    category,
    cover,
    isbn,
    price
  })
    .then(book => {
      res.json({ book });
    })
    .catch(error => {
      next(error);
    });
};
