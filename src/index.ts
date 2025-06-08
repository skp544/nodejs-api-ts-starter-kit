import express from "express";
import "dotenv/config";
import cors from "cors";

const app = express();

app.use(cors());

const PORT = process.env.PORT || 8000;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
