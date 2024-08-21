const fs = require("fs");
let readline = require("readline"); // to read data from user from console

let file = "employee.json";

function createFile() {
  console.log("file is  opened");

  fs.open(file, "w", (err) => {
    console.log(err);
  });
}

// Synchronous wayto read data

function readEmployeesync() {
  console.log("started reading file");
  let employees = fs.readFileSync(file, { encoding: "utf8" });
  console.log(employees);

  let customers1 = fs.readFileSync(file);
  console.log(customers1);

  console.log(customers1.toString());

  console.log("finshed readng");

  return JSON.parse(employees.toString());
}

// createFile();
readEmployeesync();

// asynchronous
//

function readEmployee() {
  console.log(" staretd async reading");
  fs.readFile(file, (err, data) => {
    console.log(" reading data");
    console.log(data.toString());

    console.log("finished async readign");
  });
}

function readNewData() {
  console.log(" staretd async reading");
  fs.readFile(file, (err, data) => {
    console.log(" reading data");
    console.log(data.toString());

    console.log("finished async readign");
  });
}

readEmployee();

function writedata(name, city) {
  console.log("stated wrtitt");

  employees = readEmployeesync();

  employees.push({ name: name, city: city });

  fs.writeFileSync(file, JSON.stringify(employees));

  console.log("completed the wrirttting");
}

let r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("enter name", (name) => {
  r1.question("enter city", (city) => {
    writedata(name, city);
  });
});

// createFile();
// readNewData();
