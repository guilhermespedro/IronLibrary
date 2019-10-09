'use strict';

const Book = require('../../models/book');

module.exports = (req, res, next) => {
  const isbn = req.params.isbn;
  Book.findOneAndDelete({
    isbn: isbn
  })
    .then(book => {
      if (book) {
        res.json({ type: 'success' });
      } else {
        next(new Error('BOOK_NOT_DELETED'));
      }
    })
    .catch(error => {
      next(error);
    });
};
