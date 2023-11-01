const express = require("express");
const { reviewCreate, reviewRead } = require("./controller");

const router = express.Router();

router.param("reviewId", async (req, res, next, reviewId) => {
  const review = await fetchReview(reviewId, next);
  if (review) {
    req.review = review;
    next();
  } else {
    next({ status: 404, msg: "review not found!" });
  }
});
router.param("movieId", async (req, res, next, movieId) => {
  const movie = await fetchMovie(movieId, next);
  if (movie) {
    req.movie = movie;
    next();
  } else {
    next({ status: 404, msg: "movie not found!" });
  }
});

router.post("/:movieId", reviewCreate);
router.get("/", reviewRead);

module.exports = router;
