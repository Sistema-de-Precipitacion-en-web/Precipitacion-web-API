const express = require("express");
const routerApi = require("./routes");
const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require("./middlewares/error.handler");

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

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});