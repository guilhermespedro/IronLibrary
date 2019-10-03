"use strict";

const Admin = require("../../models/admin");

module.exports = (req, res, next) => {
  const { name, email } = req.body;
  Admin.findByIdAndUpdate(
    req.admin._id,
    {
      ...(name && { name }),
      ...(email && { email })
    },
    { new: true }
  )
    .then(admin => {
      if (!admin) {
        next(new Error("USER_NOT_FOUND"));
        return;
      }
      res.json({ admin });
    })
    .catch(error => {
      next(error);
    });
};
