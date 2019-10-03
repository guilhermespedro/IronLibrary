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
    enum: ["HTML", "CSS", "JAVASCRIPT", "MONGODB", "NODE", "REACT", "EXPRESS"]
  },
  description: {
    type: String
  },
  duration: {
    type: String
  },
  image: {
    type: String
  },
  url: {
    type: String
  }
});

const findByUrlStatic = require("./statics/find-by-url");
const createVideoStatic = require("./statics/create");

videoSchema.statics.findByUrl = findByUrlStatic;
videoSchema.statics.createVideo = createVideoStatic;

const Video = mongoose.model("Video", videoSchema);

module.exports = Video;
