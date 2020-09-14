const express = require("express");
const bodyPArser = require("body-parser");

const app = express();

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => res.json({ message: "API Working" }));

app.listen(PORT, (req, res) => {
  console.log(`Server started at port: ${PORT}`);
});
