"use strict";

module.exports = function(isbn) {
  const Model = this;
  return Model.findOne({ isbn })
    .then(book => {
      return Promise.resolve(book);
    })
    .catch(error => {
      return Promise.reject(error);
    });
};
