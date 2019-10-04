"use strict";

const Book = require("../../models/book");

module.exports = (req, res, next) => {
  const id = req.params.id;
  Book.findOneAndDelete({
    _id: id
  })
    .then(book => {
      if (book) {
        res.json({ type: "success" });
      } else {
        next(new Error("BOOK_NOT_DELETED"));
      }
    })
    .catch(error => {
      next(error);
    });
};
