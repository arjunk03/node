const express = require("express");

let router = express.Router();
let NOT_FOUND = "NOT FOUND";
let uuid = require("uuid");
let users = require("./userData");

router.get("/get", (req, res) => {
  res.json(users);
});

router.get("/getdata/:id", (req, res) => {
  const found = users.some((user) => user.id === parseInt(req.params.id));

  if (found) {
    res.json(users.filter((user) => user.id === parseInt(req.params.id)));
  } else {
    // res.json("not found");

    // res.statusMessage = "ID not fund";
    // res.sendStatus(400).end(); //.json(NOT_FOUND);
    // res.send(400).end(); //.json(NOT_FOUND);
    //
    // res.sendStatus(400).json(NOT_FOUND);
    // res.end("Not found the id");

    res.sendStatus(400);
  }
});

router.post("/add", (req, res) => {
  let user = {
    name: "test",
    id: uuid.v4(),
    email: "test@gmail.com",
  };
  data = req.body;
  users.push(data);

  res.sendStatus(200);
});

router.put("/update/:id", (req, res) => {
  const found = users.some((user) => user.id === parseInt(req.params.id));

  if (found) {
    const updatedata = req.body;

    users.forEach((user) => {
      if (user.id === parseInt(req.params.id)) {
        user.name = updatedata.name ? updatedata.name : user.name;
        user.email = updatedata.email ? updatedata.email : user.email;
      } else {
        res.sendStatus(400);
      }
    });

    res.json(users.filter((user) => user.id === parseInt(req.params.id)));
  } else {
    res.sendStatus(400);
  }
});
// router.post
// router.delete
//

module.exports = router;
