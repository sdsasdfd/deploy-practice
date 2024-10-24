import express from "express";

const app = express();

const port = 5000;

app.get("/api/test", (req, res) => {
  res.json({ message: `Hello World ${Date.now()}` });
});

app.listen(port, () => {
  console.log("Run...");
});
