const express = require("express");
const router = express.Router();
const apiController = require("../controller/apisController");
const authMiddleware = require("../middleware/authMiddleware");


router.get("/:token/movie", authMiddleware, apiController.movies);
router.get("/:token/character", authMiddleware, apiController.characters);
router.get("/:token/movie/search", authMiddleware, apiController.searchMovie);
router.get("/:token/character/:id", authMiddleware, apiController.characterDetail);
router.get("/:token/movie/:id", authMiddleware, apiController.movieDetail);


module.exports = router;