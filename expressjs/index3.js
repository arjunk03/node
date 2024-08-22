let express = require("express");
let app = express();

// app.use(express.json());

app.use(express.static("public"));
app.get("/home", (req, res) => {
  console.log("Hello world");
  res.send("Hiiiii");
});

app.listen(3002, () => {
  console.log("server started");
});
