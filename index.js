const express = require("express");
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({extended:false}))

app.use("/add-product", (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title" placeholder="Title"></input><input type="number" name="size" placeholder="Size"></input><button type="submit">Add Item</button></form>'
  );
});
app.use("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Welcome to Express JS</h1>");
});

app.listen(3000);
