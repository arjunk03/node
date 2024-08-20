const fs = require("fs");

let readStream = fs.createReadStream("input.txt");
let contents = "";

readStream.on("data", (data) => {
  contents = contents + data;
});

readStream.on("end", () => {
  console.log(" fionished reading");
  console.log(contents);
});

readStream.on("error", (err) => {
  console.log(err);
});
