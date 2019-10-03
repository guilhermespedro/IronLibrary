"use strict";

const Admin = require("../../models/admin");

module.exports = (req, res, next) => {
  const { name, email, password } = req.body;
  Admin.signUp({ name, email, password })
    .then(admin => {
      req.session.user = {
        _id: admin._id
      };
      res.json({ admin });
    })
    .catch(error => {
      next(error);
    });
};
