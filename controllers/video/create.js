'use strict';

const Video = require('../../models/video');

module.exports = (req, res, next) => {
  const { title, category, duration, url } = req.body;
  Video.createVideo({
    title,
    category,
    duration,
    url
  })
    .then(video => {
      res.json({ video });
    })
    .catch(error => {
      next(error);
    });
};
