"use strict";

const Video = require("../../models/video");

module.exports = (req, res, next) => {
  const { title, description, category, duration, url } = req.body;
  Video.createVideo({
    title,
    description,
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
