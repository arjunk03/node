let express = require("express");
let app = express();

app.get("/hello", (req, resp) => {
  resp.send(" Welcomee to my hello request");
});

const server = app.listen(8000, () => {
  // const server = server.address().address;
  // const port = server.address().port;
  // console.log("this is running on http://%s:%s", host, port);
});
