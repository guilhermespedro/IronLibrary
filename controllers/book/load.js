'use strict';

const Book = require('../../models/book');

module.exports = (req, res, next) => {
  const isbn = req.params.isbn;
  console.log(isbn);
  Book.findOne({ isbn })
    .then(book => {
      res.json({ book });
    })
    .catch(error => {
      next(error);
    });
};
