import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
const port = 5000;

app.get("/api/test", (req, res) => {
  res.json({ message: `Hello World ${Date.now()}` });
});

app.listen(port, () => {
  console.log("Run...");
});
