"use strict";

const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: []
  },
  description: {
    type: String
  },
  image: {
    type: String
  }
});

const Video = mongoose.model("Video", videoSchema);

module.exports = Video;
