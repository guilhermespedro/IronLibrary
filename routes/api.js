"use strict";

const { Router } = require("express");
const router = Router();

const routeGuardMiddleware = require("./../middleware/route-guard");
const uploadImageMiddleware = require("./../middleware/image-upload");

const signUpController = require("./../controllers/user/signUp");
const logInController = require("./../controllers/user/logIn");
const logOutController = require("./../controllers/user/logOut");
const loggedInController = require("./../controllers/user/loggedIn");
const editController = require("./../controllers/user/edit");
const uploadController = require("./../controllers/user/upload");

router.post("/signup", routeGuardMiddleware(false), signUpController);
router.post("/login", routeGuardMiddleware(false), logInController);
router.post("/logout", routeGuardMiddleware(true), logOutController);
router.get("/loggedin", loggedInController);
router.post("/edit", routeGuardMiddleware(true), editController);

router.post(
  "/upload",
  routeGuardMiddleware(true),
  // uploadImageMiddleware.single("image"), not working. single is not a function!
  uploadController
);

module.exports = router;
