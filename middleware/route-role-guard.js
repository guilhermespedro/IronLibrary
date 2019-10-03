"use strict";

module.exports = allowed => {
  return (req, res, next) => {
    const role = [req.user.role, req.admin.role];
    if (!allowed.includes(role)) {
      next(new Error("NO_PERMISSION."));
      return;
    }
    next();
  };
};
