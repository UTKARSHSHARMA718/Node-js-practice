const express = require("express");
const path = require("path");
const router = express.Router();

const localDataBase = [];

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "views", "AddNewBooks.html"));
});

router.get("/view", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "views", "ViewBooks.html"));
});

router.post("/add-books", (req, res) => {
  const { body } = req;
  localDataBase.push(body);
  res.redirect("/api/books/view");
});

module.exports = router;
