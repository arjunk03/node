const express = require("express");
const { join } = require("path");
const app = express();

app.use("/assets", express.static(join(__dirname, "public")));
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.send("<h1>Purchase </h1>");
});

app
  .get("/purchase/home", (req, res) => {
    res.render("home");
  })
  .post("/purchase/home", (req, res) => {
    res.redirect("/purchase/login");
  });

app
  .get("/purchase/login", (req, res) => res.render("login"))
  .post("/purchase/login", (req, res) => res.redirect("/purchase/dashboard"));

app.get("/purchase/dashboard", (req, res) => res.render("dashboard", {}));

app.get("/purchase/logout", (req, res) => res.redirect("/purchase/login"));

app.listen(3001, () => console.log("Running purchase on port 3001"));
