"use strict";

module.exports = function(email) {
  const Model = this;
  return Model.findOne({ email })
    .then(user => {
      return Promise.resolve(user);
    })
    .catch(error => {
      return Promise.reject(error);
    });
};
