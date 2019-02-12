const express = require("express");
const path = require("path");
const serveStatic = require("serve-static");

let app = express();

app.use(serveStatic(path.resolve(__dirname, "dist")));

app.get("/", (rec, res) => {
  res.send("hello world");
});

app.listen(3000, () => {
  console.log(`Running a server at localhost:3000`);
});

module.exports = app;
