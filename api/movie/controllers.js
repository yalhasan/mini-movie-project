const Movies = require("../../models/Movies");
const Reviews = require("../../models/Reviews");

exports.movieRead = async (req, res, next) => {
  try {
    const movies = await Movies.find().populate("reviews");
    res.status(200).json(movies);
  } catch (error) {
    next(error);
  }
};

exports.movieCreate = async (req, res, next) => {
  try {
    const newMovie = await Movies.create(req.body);
    res.status(200).json(newMovie);
  } catch (error) {
    next(error);
  }
};

exports.movieUpdate = async (req, res, next) => {
  try {
    await req.movie.updateOne(req.body);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.movieDelete = async (req, res, next) => {
  try {
    await req.movie.deleteOne();
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.fetchMovie = async (movieId, next) => {
  try {
    const movie = await Movies.findById(movieId);
    return movie;
  } catch (error) {
    next(error);
  }
};

exports.movieReviews = async (req, res, next) => {
  try {
    const newReview = await Reviews.create(req.body);
    await req.movie.updateOne({ $push: { reviews: newReview } });
    res.status(200).json("thank you for your review");
  } catch (error) {
    next(error);
  }
};
