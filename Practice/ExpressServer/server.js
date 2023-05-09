const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("<h1>Nyeló</h1>");
});

app.get("/anyad", function (req, res) {
  res.send("<h2>Tedd anyádba</h2>");
});

app.get("/about", function (req, res) {
  res.send("<h1>Még mindig tedd anyádba</h1>");
});

app.listen(3000, function () {
  console.log("server started on port 3000");
});
