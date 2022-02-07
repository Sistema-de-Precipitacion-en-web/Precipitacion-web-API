const express = require("express");
const routerApi = require("./routes");

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

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
