import express, { Request, Response } from "express";

const app = express();

// Middlewares
app.use(express.json());

// Main route
app.get("/", (req: Request, res: Response) => {
  res.send(`
    <h1>
      Api main route
    </h1>
  `);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
