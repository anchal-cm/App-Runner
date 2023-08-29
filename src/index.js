const express = require("express");

const app = express();
const port = 3000;

app.get("/hello", (req, res) => {
  res.send("Hello AppRunner");
});

app.listen(port, () => {
  console.log("Started server at port 3000");
});
