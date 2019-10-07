"use strict";

const Book = require("../../models/book");

module.exports = (req, res, next) => {
  const id = req.params.id;
  const { isbn, price } = req.body;

  Book.findByIdAndUpdate(
    { _id: id },
    {
      ...(isbn && { isbn }),
      ...(price && { price })
    },
    { new: true }
  )
    .then(book => {
      if (book) {
        res.json({ book });
      } else {
        next(new Error("BOOK_NOT_EDITED"));
      }
    })
    .catch(error => {
      next(error);
    });
};
