"use strict";

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  image: {
    type: String,
    trim: true
  },
  phoneNumber: {
    type: Number,
    trim: true
  },
  country: {
    type: String,
    trim: true
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
    required: true
  }
});

const logInStatic = require("./statics/log-in");
const signUpStatic = require("./statics/sign-up");
const findByEmailStatic = require("./statics/find-by-email");

userSchema.statics.logIn = logInStatic;
userSchema.statics.signUp = signUpStatic;
userSchema.statics.findByEmail = findByEmailStatic;

const User = mongoose.model("User", userSchema);

module.exports = User;
