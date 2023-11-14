require("dotenv").config();

const config = {
  PORT: process.env.PORT,
  URL: process.env.URL,
};

for (let key in config) {
  if (!config[key]) {
    console.log("Missing env variable", key);
    process.exit();
  }
}

module.exports = config;
