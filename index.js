require("dotenv").config();
const express = require("express");
const fs = require("fs");
const path = require("path");

const indexHtml = fs.readFileSync(path.join(__dirname, "index.html"), "utf8");
const PORT = parseInt(process.env.PORT || "3500");

const app = express();

app.get("/deep-link", (req, res) => {
  res.send(indexHtml);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
