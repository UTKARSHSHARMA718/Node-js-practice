const express = require("express");
require('dotenv').config();
const app = express(); // creating an instance of express

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/me",(req,res)=>{
    res.send("<h1>Hello world!</h1>");
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
