"use strict";
const express = require("express");
const app = express();
// Middlewares
app.use(express.json());
// Main route
app.get("/", (req, res) => {
    res.send(`
    <h1>
      Api main route
    </h1>
  `);
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
