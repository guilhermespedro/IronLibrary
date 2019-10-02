"use strict";

const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({});

const Video = mongoose.model("Video", videoSchema);

module.exports = Video;
