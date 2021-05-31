const express = require("express");
const router = express.Router();
const movieController = require("../controller/movieController")

router.get("/create", movieController.create);
router.post("/create", movieController.process);

module.exports = router;