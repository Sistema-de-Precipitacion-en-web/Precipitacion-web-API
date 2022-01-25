"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = (0, express_1["default"])();
// Middlewares
app.use(express_1["default"].json());
// Main route
app.get("/", function (req, res) {
    res.send("\n    <h1>\n      Api main route\n    </h1>\n  ");
});
app.listen(3000, function () {
    console.log("Server is running on port 3000");
});
