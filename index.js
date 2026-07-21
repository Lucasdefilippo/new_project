import express from "express";

const app = express();

app.listen(30000, () => {
  console.log("running");
});

app.get("/", (req, res) => {
  res.send("Fundionou legal");
});
