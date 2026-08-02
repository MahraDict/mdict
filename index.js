const express = require("express");
const router = express.Router();

const {
  getApiStatus
} = require("../controllers/dictionaryController");

router.get("/", getApiStatus);

module.exports = router;
