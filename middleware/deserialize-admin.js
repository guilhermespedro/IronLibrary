"use strict";

const Admin = require("./../models/admin");

module.exports = (req, res, next) => {
  if (req.session && req.session.admin) {
    const id = req.session.admin._id;
    Admin.findById(id)
      .select("_id name email")
      .then(admin => {
        req.admin = admin;
        next();
      })
      .catch(error => {
        next(error);
      });
  } else {
    next();
  }
};
