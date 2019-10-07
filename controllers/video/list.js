"use strict";

const Video = require("../../models/video");

module.exports = (req, res, next) => {
  Video.find()
    .sort({ createdAt: -1 })
    .then(videos => {
      res.json({ videos });
    })
    .catch(error => {
      next(error);
    });
};
