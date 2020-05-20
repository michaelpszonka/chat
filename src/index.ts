const express = require('express');
const app = express();
const port = 8080;

app.get("/", (_req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


