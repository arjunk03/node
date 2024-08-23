const express = require("express");
let app = express();

app.set("view engine", "pug");
app.set("views", "./views");

const names = ["ravi", "rajeev", "mohan", "sai"];

app.get("/index", (req, res) => {
  res.render("index");
});

app.get("/sample", (req, res) => {
  res.render("sample", {
    title: "sample title",
    message: "sample mesageee",
    names: names,
  });
});

app.get("/dash", (req, res) => {
  res.render("sample", {
    title: "dash title",
    message: "dash mesageee",
    names: names,
  });
});

app.listen(3000, () => console.log("strated the server"));
