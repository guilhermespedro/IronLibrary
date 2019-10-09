'use strict';

const Book = require('../../models/book');

module.exports = (req, res, next) => {
  const isbn = req.params.isbn;
  const { category, price, link } = req.body;

  Book.findOneAndUpdate(
    { isbn: isbn },
    {
      ...(category && { category }),
      ...(link && { link }),
      ...(price && { price })
    },
    { new: true }
  )
    .then(book => {
      if (book) {
        res.json({ book });
      } else {
        next(new Error('BOOK_NOT_EDITED'));
      }
    })
    .catch(error => {
      next(error);
    });
};
