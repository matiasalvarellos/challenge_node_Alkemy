const express = require("express");
const router = express.Router();
const characterController = require("../controller/characterController")

router.get("/create", characterController.create);
// router.post("/create", characterController.process);

module.exports = router;