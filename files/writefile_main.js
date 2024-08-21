let obj = require("./writeFile");

let readline = require("readline"); // to read data from user from console

let r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("enter name", (name) => {
  r1.question("enter age", (age) => {
    obj.writeCustomer(name, age);
  });
});
