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
const uploadBookCoverController = require("./../controllers/book/upload");
const loadBookController = require("./../controllers/book/load");
const listBooksController = require("./../controllers/book/list");

const createVideoControler = require("./../controllers/video/create");
const editVideoControler = require("./../controllers/video/edit");
const deleteVideoControler = require("./../controllers/video/delete");
const loadVideoController = require("./../controllers/video/load");
const listVideosController = require("./../controllers/video/list");

// --------------Authentication Routes--------------

router.post("/auth/sign-up", routeGuardMiddleware(false), signUpController);

router.post("/auth/log-in", routeGuardMiddleware(false), logInController);

router.post("/auth/log-out", routeGuardMiddleware(true), logOutController);

router.get("/auth/verify/", verifyController);

router.patch("/auth/edit/:id", routeGuardMiddleware(true), editController);

router.patch(
  "/auth/upload",
  routeGuardMiddleware(true),
  uploadImageMiddleware.single("image"),
  uploadController
);

// --------------Book Routes--------------

router.get("/product/book", listBooksController);

router.post(
  "/product/book/create",
  routeRoleGuardMiddleware(["admin"]),
  createBookControler
);

router.get("/product/book/:id", loadBookController);

router.patch(
  "/product/book/edit/:id",
  routeRoleGuardMiddleware(["admin"]),
  editBookControler
);

router.patch(
  "/product/book/upload/:id",
  routeRoleGuardMiddleware(["admin"]),
  uploadImageMiddleware.single("cover"),
  uploadBookCoverController
);

router.delete(
  "/product/book/delete/:id",
  routeRoleGuardMiddleware(["admin"]),
  deleteBookControler
);

// --------------Videos Routes--------------

router.get("/product/video", listVideosController);

router.post(
  "/product/video/create",
  routeRoleGuardMiddleware(["admin"]),
  createVideoControler
);

router.get("/product/video/:id", loadVideoController);

router.patch(
  "/product/video/edit/:id",
  routeRoleGuardMiddleware(["admin"]),
  editVideoControler
);

router.delete(
  "/product/video/delete/:id",
  routeRoleGuardMiddleware(["admin"]),
  deleteVideoControler
);

module.exports = router;
