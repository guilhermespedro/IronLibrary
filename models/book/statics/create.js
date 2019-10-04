"use strict";

module.exports = function({
  title,
  thumbnail,
  year,
  description,
  authors,
  category,
  isbn,
  price
}) {
  const Model = this;

  return Model.findByIsbn(isbn)
    .then(book => {
      if (book) {
        throw new Error("BOOK_ALREADY_EXISTS");
      } else {
        return Model.create({
          title,
          thumbnail,
          year,
          description,
          authors,
          category,
          isbn: isbn,
          price
        });
      }
    })
    .then(book => {
      return Promise.resolve(book);
    })
    .catch(error => {
      console.log(error);
      return Promise.reject(new Error("ERROR_CREATING_BOOK"));
    });
};
