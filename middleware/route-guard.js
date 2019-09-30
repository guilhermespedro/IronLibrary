"use strict";

module.exports = authenticated => (req, res, next) => {
  if (authenticated && !req.user) {
    next(new Error("NO_PERMISSION"));
  } else if (!authenticated && req.user) {
    next(new Error("USER_MUST_BE_UNAUTHENTICATED"));
  } else {
    next();
  }
};
