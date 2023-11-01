const express = require("express");
const {
  movieCreate,
  movieRead,
  fetchMovie,
  movieUpdate,
  movieDelete,
  movieReviews,
} = require("./controllers");
const Reviews = require("../../models/Reviews");

const router = express.Router();

router.param("movieId", async (req, res, next, movieId) => {
  const movie = await fetchMovie(movieId, next);
  if (movie) {
    req.movie = movie;
    next();
  } else {
    next({ status: 404, msg: "movie not found!" });
  }
});

router.post("/", movieCreate);
router.get("/", movieRead);
router.put("/:movieId", movieUpdate);
router.delete("/:movieId", movieDelete);

router.post("/:movieId", movieReviews);

module.exports = router;
