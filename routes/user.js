const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const validator = require("../middleware/validator");
const guestMiddleware = require("../middleware/guestMiddleware");

router.get("/login", guestMiddleware, userController.login);
router.post("/login", validator.login ,userController.processLogin);
router.get("/register", guestMiddleware, userController.register);
router.post("/register", validator.regis, userController.processRegister);
router.post("/logout", userController.logout);


module.exports = router;