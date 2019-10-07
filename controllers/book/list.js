"use strict";

const Book = require("../../models/book");

module.exports = (req, res, next) => {
  Book.find()
    .sort({ createdAt: -1 })
    .then(books => {
      res.json({ books });
    })
    .catch(error => {
      next(error);
    });
};
