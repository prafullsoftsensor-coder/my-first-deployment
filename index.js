import express from "express";

const app = express();

const PORT = 8080;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "🚀 Hello World!",
    status: "Success",
    timestamp: new Date(),
  });
});

app.get("/health", (req, res) => {
  res.send("Server is healthy and running fine!");
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
