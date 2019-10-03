"use strict";

const Admin = require("../../models/admin");

module.exports = (req, res, next) => {
  const { email, password } = req.body;
  Admin.logIn({ email, password })
    .then(admin => {
      req.session.admin = {
        _id: admin._id
      };
      res.json({ admin });
    })
    .catch(error => {
      next(error);
    });
};
