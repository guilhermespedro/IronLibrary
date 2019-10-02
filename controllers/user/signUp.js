"use strict";

const User = require("../../models/user");

module.exports = (req, res, next) => {
  const { name, email, password, country, phoneNumber } = req.body;
  User.signUp({ name, email, password, country, phoneNumber })
    .then(user => {
      req.session.user = {
        _id: user._id
      };
      res.json({ user });
    })
    .catch(error => {
      next(error);
    });
};
