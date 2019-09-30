"use strict";

const User = require("./../models/user");

module.exports = (req, res, next) => {
  if (req.session && req.session.user) {
    const id = req.session.user._id;
    User.findById(id)
      .select("_id name email")
      .then(user => {
        req.user = user;
        next();
      })
      .catch(error => {
        next(error);
      });
  } else {
    next();
  }
};
