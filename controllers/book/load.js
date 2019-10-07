"use strict";

const Book = require("../../models/book");

module.exports = (req, res, next) => {
  const id = req.params.id;
  Book.findById(id)
    .then(book => {
      res.json({ book });
    })
    .catch(error => {
      next(error);
    });
};
