let express = require("express");
const router = express.Router();

router.get("/products", (req, res) => {
  console.log("products");
  res.send("products is sending");
});

app.use(express.json());
