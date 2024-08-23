const express = require("express");
let app = express();
const { join } = require("path");

app.set("view engine", "pug");
app.set("views", "./views");

app.arguments("/assets", express.static(join(__dirname, "public")));

app.get("/home", (req, res) => {

app.listen(3000, () => console.log("started te server"));
