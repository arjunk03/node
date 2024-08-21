const fs = require("fs");
const path = require("path");

// fs.mkdir(path.join(__dirname, "arjun", "demos"), { recursive: true }, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("created diectory");
//   }
// });
//

fs.access(path.join(__dirname, "arjun", "demos"), fs.F_OK | fs.R_OK, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("access and read is possible");
  }
});

fs.rename(
  path.join(__dirname, "arjun", "demos"),
  path.join(__dirname, "arjun", "test"),
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("renamed");
    }
  },
);

fs.rmdir(path.join(__dirname, "arjun", "test"), (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("removed");
  }
});
