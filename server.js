const express = require("express");
const app = express();

app.listen(3000);

app.get("/", (req, res) => {
  res.send("Activo");
});
app.post("/products", (req, res) => {
  const { name, description, price } = req.body;
  res.send();
});
