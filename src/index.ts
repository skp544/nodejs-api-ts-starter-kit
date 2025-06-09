import express from "express";
import "dotenv/config";
import cors from "cors";
import { globalErrorHandler } from "./middlewares/error.middleware";
import { logRequest } from "./middlewares/logger.middleware";

const app = express();

app.use(cors());

const PORT = process.env.PORT || 8000;
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(logRequest);
app.use(globalErrorHandler);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
