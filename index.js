import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "🚀 Hello World!",
    status: "Success",
    timestamp: new Date(),
  });
});

app.get("/version", (req, res) => {
  res.json({
    version: "v2.0",
    updatedAt: new Date(),
    feature: "Automatic Deployment Working!",
  });
});

app.get("/health", (req, res) => {
  res.send("Server is healthy and running fine!");
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
