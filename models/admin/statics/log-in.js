"use strict";

const bcrypt = require("bcryptjs");

// Create a sign in static that is going to abstact the authentication functionality
module.exports = function({ email, password }) {
  const Model = this;

  let auxiliaryAdmin;

  return Model.findByEmail(email)
    .then(admin => {
      if (!admin) {
        throw new Error("USER_NOT_FOUND");
      } else {
        auxiliaryAdmin = admin;
        return bcrypt.compare(password, admin.password);
      }
    })
    .then(matches => {
      if (!matches) {
        throw new Error("PASSWORD_DOESNT_MATCH");
      } else {
        return Promise.resolve(auxiliaryAdmin);
      }
    })
    .catch(error => {
      console.log("There was an error signing up the user", error);
      return Promise.reject(error);
    });
};
