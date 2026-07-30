const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Mahra Dictionary API is running"
  });
});

module.exports = router;
