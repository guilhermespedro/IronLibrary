'use strict';

module.exports = function({ title, category, duration, url }) {
  const Model = this;

  return Model.findByUrl(url)
    .then(video => {
      if (video) {
        throw new Error('VIDEO_ALREADY_EXISTS');
      } else {
        return Model.create({
          title,
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
      return Promise.reject(new Error('ERROR_CREATING_VIDEO'));
    });
};
