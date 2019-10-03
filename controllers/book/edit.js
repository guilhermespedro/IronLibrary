"use strict";

const Book = require("../../models/book");

module.exports = (req, res, next) => {
  // const { name, email, phoneNumber } = req.body;
  // Book.findByIdAndUpdate(
  //   req.user._id,
  //   {
  //     ...(name && { name }),
  //     ...(email && { email }),
  //     ...(phoneNumber && { phoneNumber })
  //   },
  //   { new: true }
  // )
  //   .then(user => {
  //     if (!user) {
  //       next(new Error("USER_NOT_FOUND"));
  //       return;
  //     }
  //     res.json({ user });
  //   })
  //   .catch(error => {
  //     next(error);
  //   });
};
