const express = require("express");

const router = express.Router();

const {
  analyze,
} = require("../controllers/analysis.controller");

router.post("/", analyze);

module.exports = router;