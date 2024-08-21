const fs = require("fs");

let file = "customer.json";

function loadDataAsync() {
  fs.readFile(file, (err, data) => {
    console.log("reading data in async");
    console.log(data.toString());

    fs.writeFile("copy.json", data.toString(), (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("wriien the data to new file");
      }
    });
  });
  console.log("finished reading asyunc");
}

loadDataAsync();
