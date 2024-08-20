const fs = require("fs");
const zlib = require("zlib");

let read = fs.createReadStream("login.txt");

let write = fs.createWriteStream("result.txt.gz");

let gzip = zlib.createGzip();

read
  .pipe(gzip)
  .pipe(write)
  .on("finish", () => {
    console.log("finished  compressing ");
    write.end();
    write.close();
  });

// unzipping
//
let gunzip = zlib.createGunzip();
let rs = fs.createReadStream("sample.txt.gz");
//
rs.pipe(gunzip)
  .pipe(process.stdout)
  .on("error", (err) => {
    console.log("after uncomperessing");
    console.log(err);
  });
