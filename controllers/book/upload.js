"use strict";

const Book = require("../../models/book");

module.exports = (req, res, next) => {
  const id = req.params.id;
  const { url } = req.file;

  Book.findByIdAndUpdate(
    { _id: id },
    {
      ...(url && { cover: url })
    },
    { new: true }
  )
    .then(book => {
      if (book) {
        res.json({ book });
      } else {
        next(new Error("COVER_NOT_UPLOADED"));
      }
    })
    .catch(error => {
      next(error);
    });
};
