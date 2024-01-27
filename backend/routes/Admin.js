const express = require("express");

const router = express.Router();

const data = [];

router.get("/", (req, res) => {
  res
    .status(200)
    .json({
      data: {
        name: "Admin Name",
        currentClass: "Special class",
        rank: "1st",
      },
    });
});

router.get("/add-admin-form", (req, res) => {
  res.status(200).send(`
    <form method="POST" action="/api/admin/create">
        <input type="text" name="name" />
        <input type="text" name="class" />
        <input type="number" name="rank" />
        <button type="submit">submit</button>
    </form>
    
    `);
});

router.post("/create", (req, res) => {
  data.push(req.body);
  console.log({data});
  res.status(201).send("Admin Name has been created.");
});

module.exports = router;
