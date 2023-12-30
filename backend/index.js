const express = require("express");
const cors = require('cors')
require("dotenv").config();
const app = express(); // creating an instance of express
app.use(cors());

app.get("/truths", (req, res) => {
  const data = {
    isError: false,
    statusCode: 200,
    errorMessage: "",
    data: [
      {
        author: "Nicolas Taleb",
        truth:
          "“A Stoic is someone who transforms fear into prudence, pain into transformation, mistakes into initiation, and desire into undertaking.”",
        year: 2015,
      },
      {
        author: "Seneca",
        truth:
          "“Not how long, but how well you have lived is the main thing.”",
        year: 1100,
      },
    ],
  };
  res.send(JSON.stringify(data));
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
