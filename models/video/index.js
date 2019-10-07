"use strict";

const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    enum: ["HTML", "CSS", "JAVASCRIPT", "MONGODB", "NODE", "REACT", "EXPRESS"]
  },
  description: {
    type: String,
    trim: true
  },
  duration: {
    type: String,
    trim: true
  },
  url: {
    type: String,
    trim: true
  }
});

const findByUrlStatic = require("./statics/find-by-url");
const createVideoStatic = require("./statics/create");

videoSchema.statics.findByUrl = findByUrlStatic;
videoSchema.statics.createVideo = createVideoStatic;

const Video = mongoose.model("Video", videoSchema);

module.exports = Video;
