"use strict";

module.exports = allowed => {
  return (req, res, next) => {
    const role = req.user.role;
    console.log(req.user);
    if (!allowed.includes(role)) {
      next(new Error("NO_PERMISSION."));
      return;
    }
    next();
  };
};
