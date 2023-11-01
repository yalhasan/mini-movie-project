const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./database");
const movieRouter = require("./api/movie/routes");
const actorRoutes = require("./api/actor/routes");
const reviewRoutes = require("./api/review/routes");
const { errorHandler } = require("./middlewares/errorHandler");
const { notFound } = require("./middlewares/notFoundMiddleware");
const app = express();
require("dotenv").config();

connectDB();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use("/movie", movieRouter);
app.use("/actor", actorRoutes);
app.use("/review", reviewRoutes);
app.use(errorHandler);
app.use(notFound);

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
