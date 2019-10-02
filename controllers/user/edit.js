"use strict";

const User = require("../../models/user");

module.exports = (req, res, next) => {
  const { name, email, url } = req.body;
  User.findByIdAndUpdate(
    req.user._id,
    {
      ...(name && { name }),
      ...(email && { email }),
      ...(url && { url })
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
