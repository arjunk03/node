const fs = require("fs");

let data = "teset data writing";

fs.writeFile("books.txt", data, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("file written sucessfully");
    console.log("thiss is the daata");
  }
});

let data1 = " esnddd daraaaasddffg";
fs.writeFile(
  "books2.txt",
  data1,
  { encoding: "utf8", flag: "a", mode: "0777" },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("file written successsfully");
      console.log("thiss is the daata  111");
      console.log(fs.readFileSync("books2.txt", "utf8"));
    }
  },
);
