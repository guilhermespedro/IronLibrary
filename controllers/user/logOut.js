"use strict";

const User = require("./../../models/user/user");

module.exports = (req, res, next) => {
  req.session.destroy();
  res.json({ message: "User was logged out" });
};
