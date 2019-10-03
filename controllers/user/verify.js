"use strict";

module.exports = (req, res, next) => {
  res.json({ user: req.user });
};
