const fs = require("fs");

let file = "customer.json";

function loaddata() {
  console.log("started");
  let customers = fs.readFileSync(file, { encoding: "utf8" });

  return JSON.parse(customers.toString());
}

function writedata(name, age) {
  console.log("stated wrtitt");

  customers = loaddata();

  customers.push({ name: name, age: age });

  fs.writeFileSync(file, JSON.stringify(customers));

  console.log("completed the wrirttting");
}

module.exports = {
  load: loaddata,
  writeCustomer: writedata,
};
