"use strict";

const User = require("../../models/user");

module.exports = (req, res, next) => {
  const { name, email, phoneNumber, country } = req.body;
  User.findByIdAndUpdate(
    req.user._id,
    {
      ...(name && { name }),
      ...(email && { email }),
      ...(phoneNumber && { phoneNumber }),
      ...(country && { country })
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
