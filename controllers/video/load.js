"use strict";

const Video = require("../../models/video");

module.exports = (req, res, next) => {
  const id = req.params.id;
  Video.findById(id)
    .then(video => {
      res.json({ video });
    })
    .catch(error => {
      next(error);
    });
};
