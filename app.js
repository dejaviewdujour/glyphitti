const express = require("express");
let app = express();

app.use(express.static("dist"));

app.listen(3000, () => {
  console.log(`Running a server at localhost:3000`);
});

module.exports = app;
