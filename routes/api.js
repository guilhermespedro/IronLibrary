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

const logInAdminController = require("./../controllers/admin/logIn");
const logOutAdminController = require("./../controllers/admin/logOut");
const verifyAdminController = require("../controllers/admin/verify");
const editAdminController = require("./../controllers/admin/edit");

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
  logInAdminController
);
router.post(
  "/auth/log-out",
  routeGuardMiddleware(true),
  logOutUserController,
  logOutAdminController
);
router.get("/auth/verify", verifyUserController, verifyAdminController);
router.patch(
  "/auth/edit",
  routeGuardMiddleware(true),
  editUserController,
  editAdminController
);

router.patch(
  "/auth/upload",
  routeGuardMiddleware(true),
  uploadImageMiddleware.single("image"),
  uploadUserController
);

router.post(
  "/product/book/create",
  routeRoleGuardMiddleware(["admin"]),
  createBookControler
);
router.patch(
  "/product/book/edit",
  routeRoleGuardMiddleware(["admin"]),
  editBookControler
);
router.post(
  "/product/book/delete",
  routeRoleGuardMiddleware(["admin"]),
  deleteBookControler
);

router.post(
  "/product/video/create",
  routeRoleGuardMiddleware(["admin"]),
  createVideoControler
);
router.patch(
  "/product/video/edit",
  routeRoleGuardMiddleware(["admin"]),
  editVideoControler
);
router.post(
  "/product/video/delete",
  routeRoleGuardMiddleware(["admin"]),
  deleteVideoControler
);

module.exports = router;
