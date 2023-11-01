const Actors = require("../../models/actors");

exports.actorRead = async (req, res, next) => {
  try {
    const actors = await Actors.find();
    res.status(200).json(actors);
  } catch (error) {
    next(error);
  }
};

exports.actorCreate = async (req, res, next) => {
  try {
    const newActor = await Actors.create(req.body);
    res.status(200).json(newActor);
  } catch (error) {
    next(error);
  }
};

exports.actorUpdate = async (req, res, next) => {
  try {
    await req.actor.updateOne(req.body);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.actorDelete = async (req, res, next) => {
  try {
    await req.actor.deleteOne();
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.fetchActor = async (actorId, next) => {
  try {
    const actor = await Actors.findById(actorId);
    return actor;
  } catch (error) {
    next(error);
  }
};

exports.addActorToMovie = async (req, res, next) => {
  try {
    await req.actor.updateOne({ $push: { movies: req.movie } });
    await req.movie.updateOne({ $push: { actors: req.actor } });

    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.getOneActor = async (req, res, next) => {
  try {
    const actor = await req.actor.populate("movies");
    res.status(200).json(actor);
  } catch (error) {
    next(error);
  }
};
