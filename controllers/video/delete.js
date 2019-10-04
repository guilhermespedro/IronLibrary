"use strict";

const Video = require("../../models/video");

module.exports = (req, res, next) => {
  const id = req.params.id;
  Video.findOneAndDelete({
    _id: id
  })
    .then(video => {
      if (video) {
        res.json({ type: "success" });
      } else {
        next(new Error("VIDEO_NOT_DELETED"));
      }
    })
    .catch(error => {
      next(error);
    });
};
