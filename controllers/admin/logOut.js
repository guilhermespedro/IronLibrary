"use strict";

const Admin = require("../../models/admin");

module.exports = (req, res, next) => {
  req.session.destroy();
  res.json({ message: "Admin was logged out" });
};
