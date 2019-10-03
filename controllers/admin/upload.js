"use strict";

const Admin = require("../../models/admin");

module.exports = (req, res, next) => {
  const { url } = req.file;
  Admin.findByIdAndUpdate
}