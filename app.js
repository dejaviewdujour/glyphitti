const express = require("express");
const path = require("path");
const serveStatic = require("serve-static");

let app = express();

app.use(serveStatic(path.resolve(__dirname, "dist")));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server up and listening on port ${port}`);
});

module.exports = app;
