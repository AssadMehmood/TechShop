const express = require("express");
const app = express();
const products = require("./data/products.js");
app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/products", function (req, res) {
  console.log("Sending products");
  res.send(products);
});

app.get("/products/:id", function (req, res) {
  const id = req.params.id;
  const product = products.find((p) => p._id === id);
  res.send(product);
});

app.get("/name", function (req, res) {
  res.send("My name is ...");
});

app.listen(3500, console.log("Server running on Port 3500"));
