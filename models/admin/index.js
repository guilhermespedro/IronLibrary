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
  password: {
    type: String,
    required: true
  }
});

const logInStatic = require("./statics/log-in");
const signUpStatic = require("./statics/sign-up");
const findByEmailStatic = require("./statics/find-by-email");

adminSchema.statics.logIn = logInStatic;
adminSchema.statics.signUp = signUpStatic;
adminSchema.statics.findByEmail = findByEmailStatic;

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
