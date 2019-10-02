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
  passwordHash: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true,
    enum: ["user"],
    default: "user"
  },
  image: {
    type: String
  },
  phoneNumber: {
    type: Number,
    trim: true
  },
  contry: {
    type: String
  }
});

const signInStatic = require("./statics/sign-in");
const signUpStatic = require("./statics/sign-up");
const findByEmailStatic = require("./statics/find-by-email");

userSchema.statics.signIn = signInStatic;
userSchema.statics.signUp = signUpStatic;
userSchema.statics.findByEmail = findByEmailStatic;

const User = mongoose.model("User", userSchema);

module.exports = User;
