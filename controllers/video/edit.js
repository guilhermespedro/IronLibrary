"use strict";

const Video = require("../../models/video");

module.exports = (req, res, next) => {
  const id = req.params.id;
  const { title, description, duration, category } = req.body;
  Video.findByIdAndUpdate(
    { _id: id },
    {
      ...(title && { title }),
      ...(description && { description }),
      ...(duration && { duration }),
      ...(category && { category })
    },
    { new: true }
  )
    .then(video => {
      if (video) {
        res.json({ type: "success", data: { video } });
      } else {
        next(new Error("VIDEO_NOT_EDITED"));
      }
    })
    .catch(error => {
      next(error);
    });
};
