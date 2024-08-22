let express = require("express");
let app = express();

app.use(express.json());

app.use("/api/users", require("./users.js"));

app.listen(3001, () => {
  console.log("server started");
});
