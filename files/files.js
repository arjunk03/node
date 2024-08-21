const fs = require("fs");

let file = "customer.json";

function createFile() {
  console.log("file is  opened");

  fs.open(file, "r", (err) => {
    console.log(err);
  });
}

// Synchronous wayto read data

function loadData() {
  console.log("started reading file");
  let customers = fs.readFileSync(file, { encoding: "utf8" });
  console.log(customers);

  let customers1 = fs.readFileSync(file);
  console.log(customers1);

  console.log(customers1.toString());

  console.log("finshed readng");
}

// createFile();
// loadData();

// asynchronous
//

function loadDataAsync() {
  console.log(" staretd async reading");
  fs.readFile(file, (err, data) => {
    console.log(" reading data");
    console.log(data.toString());

    console.log("finished async readign");
  });
}

// createFile();
loadDataAsync();
