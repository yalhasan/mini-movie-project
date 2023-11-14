const express = require("express");
const { reviewCreate, reviewRead } = require("./controller");

const router = express.Router();

router.get("/", reviewRead);

module.exports = router;
