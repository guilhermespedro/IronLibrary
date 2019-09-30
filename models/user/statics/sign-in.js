"use strict";

const bcrypt = require("bcrypt");

// Create a sign in static that is going to abstact the authentication functionality
module.exports = function({ email, password }) {
  const Model = this;

  let auxiliaryUser;

  return Model.findByEmail(email)
    .then(user => {
      if (!user) {
        throw new Error("USER_NOT_FOUND");
      } else {
        auxiliaryUser = user;
        return bcrypt.compare(password, user.passwordHash);
      }
    })
    .then(matches => {
      if (!matches) {
        throw new Error("PASSWORD_DOESNT_MATCH");
      } else {
        return Promise.resolve(auxiliaryUser);
      }
    })
    .catch(error => {
      console.log("There was an error signing up the user", error);
      return Promise.reject(error);
    });
};
