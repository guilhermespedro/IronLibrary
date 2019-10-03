"use strict";

const { Router } = require("express");
const router = Router();

const routeGuardMiddleware = require("./../middleware/route-guard");
const uploadImageMiddleware = require("./../middleware/image-upload");
const routeRoleGuardMiddleware = require("./../middleware/route-role-guard");

const signUpController = require("./../controllers/user/signUp");
const logInController = require("./../controllers/user/logIn");
const logOutController = require("./../controllers/user/logOut");
const verifyController = require("../controllers/user/verify");
const editController = require("./../controllers/user/edit");
const uploadController = require("./../controllers/user/upload");

const createBookControler = require("./../controllers/book/create");
const editBookControler = require("./../controllers/book/edit");
const deleteBookControler = require("./../controllers/book/delete");

const createVideoControler = require("./../controllers/video/create");
const editVideoControler = require("./../controllers/video/edit");
const deleteVideoControler = require("./../controllers/video/delete");

router.post("/auth/sign-up", routeGuardMiddleware(false), signUpController);
router.post("/auth/log-in", routeGuardMiddleware(false), logInController);
router.post("/auth/log-out", routeGuardMiddleware(true), logOutController);
router.get("/auth/verify", verifyController);
router.patch("/auth/edit", routeGuardMiddleware(true), editController);

router.patch(
  "/auth/upload",
  routeGuardMiddleware(true),
  uploadImageMiddleware.single("image"),
  uploadController
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
