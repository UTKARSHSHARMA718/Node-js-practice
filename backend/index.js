const express = require("express");
require("dotenv").config();

const app = express();

app.use("/users", (req, res, next) => {
  console.log("/users");
  res.status(400).json({
    data: [
      {
        name: "utlarsh",
        rollNo: 123456789,
        class: "10th",
        section: "A",
      },
    ],
  });
});

app.use("/", (req, res, next) => {
  console.log("Home");
  res.status(200).send("<h1> hello Home </h1>");
});

app.listen(process.env.PORT, () => {
  console.log("listening on port" + process.env.PORT);
});
