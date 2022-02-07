const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
  res.json({
    message: "Esta funcionando bien este endpoint",
  });
});

module.exports = router;
