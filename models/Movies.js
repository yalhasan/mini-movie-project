const { model, Schema } = require("mongoose");

const MovieSchema = new Schema({
  title: String,
  genre: String,
  actors: [{ type: Schema.Types.ObjectId, ref: "Actor" }],
  reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
});

module.exports = model("Movie", MovieSchema);
