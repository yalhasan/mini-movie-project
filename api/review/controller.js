const Reviews = require("../../models/Reviews");

exports.reviewRead = async (req, res, next) => {
  try {
    const reviews = await Reviews.find();
    res.status(200).json(reviews);
  } catch (error) {
    next(error);
  }
};
