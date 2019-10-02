"use strict";

const User = require("./../../models/user");

module.exports = (req, res, next) => {
  const { url } = req.file;
  User.findByIdAndUpdate(
    req.user._id,
    {
      ...(url && { image: url })
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
