"use strict";

module.exports = function({ title, description, category, duration, url }) {
  const Model = this;

  return Model.findByUrl(url)
    .then(video => {
      if (video) {
        throw new Error("BOOK_ALREADY_EXISTS");
      } else {
        return Model.create({
          title,
          description,
          category,
          duration,
          url
        });
      }
    })
    .then(video => {
      return Promise.resolve(video);
    })
    .catch(error => {
      console.log(error);
      return Promise.reject(
        new Error("There was an error in the sign up process.")
      );
    });
};
