const { model, Schema } = require("mongoose");

const ReviewSchema = new Schema({
  movie: { type: Schema.Types.ObjectId, ref: "Movie" },
  rate: Number,
  description: String,
});

module.exports = model("Review", ReviewSchema);
