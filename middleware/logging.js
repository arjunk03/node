let express = require("express");
let app = express();
const router = express.Router();

const loggerMiddleware = (req, res, next) => {
  console.log(
    `logged the requst  ${req.url} ...... ${req.method} ....${new Date()}`,
  );
  next();
};

// app.use(loggerMiddleware)

router.use(loggerMiddleware);

router.get(
  "/users/:id",
  (req, res, next) => {
    console.log("the original url", req.originalUrl);
    next();
  },
  (req, res, next) => {
    console.log(req.method);
    next();
  },
  (req, res) => {
    console.log("trrr");
    res.json({ status: true, id: req.params.id });
  },
);

app.use("/", router);

app.get("/users", (req, res) => {
  res.json({ status: true });
});

app.post("/save", (req, res) => {
  res.json({ status: true });
});

app.listen(3001, () => {
  console.log("server started");
});
