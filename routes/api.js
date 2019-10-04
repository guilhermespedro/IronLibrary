"use strict";

const { Router } = require("express");
const router = Router();

const routeGuardMiddleware = require("./../middleware/route-guard");
const uploadImageMiddleware = require("./../middleware/image-upload");
const routeRoleGuardMiddleware = require("./../middleware/route-role-guard");

const signUpUserController = require("./../controllers/user/signUp");
const logInUserController = require("./../controllers/user/logIn");
const logOutUserController = require("./../controllers/user/logOut");
const verifyUserController = require("../controllers/user/verify");
const editUserController = require("./../controllers/user/edit");
const uploadUserController = require("./../controllers/user/upload");


const createBookControler = require("./../controllers/book/create");
const editBookControler = require("./../controllers/book/edit");
const deleteBookControler = require("./../controllers/book/delete");

const createVideoControler = require("./../controllers/video/create");
const editVideoControler = require("./../controllers/video/edit");
const deleteVideoControler = require("./../controllers/video/delete");

router.post("/auth/sign-up", routeGuardMiddleware(false), signUpUserController);
router.post(
  "/auth/log-in",
  routeGuardMiddleware(false),
  logInUserController,
  
);



router.post(
  "/auth/log-out",
  routeGuardMiddleware(true),
  logOutUserController,
  
);
router.get("/auth/verify", verifyUserController);
router.patch(
  "/auth/edit",
  routeGuardMiddleware(true),
  editUserController,
  
);

router.patch(
  "/auth/upload",
  routeGuardMiddleware(true),
  uploadImageMiddleware.single("image"),
  uploadUserController
);




module.exports = router;
