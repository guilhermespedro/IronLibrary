'use strict';

const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    category: {
      type: String,
      required: true,
      enum: ['HTML', 'CSS', 'JAVASCRIPT', 'MONGODB', 'NODE', 'REACT', 'EXPRESS']
    },
    duration: {
      type: String,
      trim: true
    },
    url: {
      type: String,
      required: true,
      unique: true
    }
  },
  {
    timestamps: true
  }
);

const findByUrlStatic = require('./statics/find-by-url');
const createVideoStatic = require('./statics/create');

videoSchema.statics.findByUrl = findByUrlStatic;
videoSchema.statics.createVideo = createVideoStatic;

const Video = mongoose.model('Video', videoSchema);

module.exports = Video;
