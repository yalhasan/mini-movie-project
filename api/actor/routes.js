const express = require("express");
const {
  actorCreate,
  actorRead,
  actorUpdate,
  actorDelete,
  fetchActor,
  getOneActor,
  addActorToMovie,
} = require("./controller");
const { fetchMovie } = require("../movie/controllers");

const router = express.Router();

router.param("actorId", async (req, res, next, actorId) => {
  const actor = await fetchActor(actorId, next);
  if (actor) {
    req.actor = actor;
    next();
  } else {
    next({ status: 404, msg: "actor not found!" });
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

router.post("/", actorCreate);
router.get("/", actorRead);
router.put("/:actorId", actorUpdate);
router.delete("/:actorId", actorDelete);

router.put("/:actorId/:movieId", addActorToMovie);
router.get("/:actorId", getOneActor);

module.exports = router;
