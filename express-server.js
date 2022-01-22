const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.end("Hello World");
});

app.post("/end", (req, res) => {
  res.json({
    message: "bye",
    body: req.body,
  });
});

app.all("*", (req, res) => res.status(404).send(`Not found`));

app.listen(7500, () => {
  console.log("Server is listening to port 7500");
});
