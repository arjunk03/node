let express = require("express");
let app = express();
const things = require("./things");

app.use("/api/products", things);

app.use(express.json());

app.use("/api/users", require("./users.js"));

app.listen(3001, () => {
  console.log("server started");
});
