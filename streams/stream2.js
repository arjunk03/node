const fs = require("fs");

let writeStream = fs.createWriteStream("result.txt");

let data =
  " we are adding the node s data to file .  we are adding the node s data to file we are adding the node s data to file we are adding the node s data to file we are adding the node s data to file";

for (let i = 0; i < data.length; i++) {
  writeStream.write(data, "utf-8");
}

writeStream.end();

writeStream.on("finish", () => {
  console.log(" finihsed writing");
});

writeStream.on("error", (err) => {
  console.log(err);
});

writeStream.close();
