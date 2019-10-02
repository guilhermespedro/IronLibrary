"use strict";

const { Router } = require("express");
const router = Router();

const routeGuardMiddleware = require("./../middleware/route-guard");
const imageUploadMiddleware = require("./../middleware/image-upload");

const signUpController = require("./../controllers/user/signUp");
const logInController = require("./../controllers/user/logIn");
const logOutController = require("./../controllers/user/logOut");
const loggedInController = require("./../controllers/user/loggedIn");
const editController = require("./../controllers/user/edit");
const uploadControlloer = require("./../controllers/user/upload");

module.exports = router;
