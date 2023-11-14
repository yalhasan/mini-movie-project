const mongoose = require("mongoose");
const config = require("./config");

const connectDB = async () => {
  const conn = await mongoose.connect(config.URL);
  console.log(`mongo connected: ${conn.connection.host}`);
};

module.exports = connectDB;
