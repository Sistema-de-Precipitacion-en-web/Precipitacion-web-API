const express = require("express");
const routerApi = require("./routes");
const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require("./middlewares/error.handler");
const cors = require("cors");

const { config } = require("./config/config");

const app = express();

// Middlewares
app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);
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

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
