"use strict";

module.exports = function(url) {
  const Model = this;
  return Model.findOne({ url })
    .then(video => {
      return Promise.resolve(video);
    })
    .catch(error => {
      return Promise.reject(error);
    });
};
