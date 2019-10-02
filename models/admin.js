"use strict";

const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
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
  }
});

const signInStatic = require("./statics/sign-in");
const signUpStatic = require("./statics/sign-up");
const findByEmailStatic = require("./statics/find-by-email");

adminSchema.statics.signIn = signInStatic;
adminSchema.statics.signUp = signUpStatic;
adminSchema.statics.findByEmail = findByEmailStatic;

const User = mongoose.model("User", adminSchema);

module.exports = User;
