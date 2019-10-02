"use strict";

const User = require("./../../models/user/user");

module.exports = (req, res, next) => {
  const { username, email } = req.body;
  User.findByIdAndUpdate(
    req.user._id,
    {
      ...(username && { username }),
      ...(email && { email })
    },
    { new: true }
  )
    .then(user => {
      if (!user) {
        next(new Error("USER_NOT_FOUND"));
        return;
      }
      res.json({ user });
    })
    .catch(error => {
      next(error);
    });
};
