const express = require("express");
const path = require("path");

const router = express.Router();

const rootDirectoryPath = require("../utils/getRootDirectoryPath");

const localDataBase = [];

// NOTE: .get, .post, .put, .delete and .patch will do exact matching of url not like .use()
router.get("/get-products", (req, res) => {
  localDataBase.push(req.query);
  res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
});

router.get("/add-products", (req, res) => {
  // NOTE: path to use path because it automatically handles the path for both linux and windows
  res.sendFile(path.join(rootDirectoryPath, "views", "add-product.html"));
});

router.post("/add-products", (req, res) => {
  console.log({
    v: req.body,
  });
  res.redirect(
    `/api/store/get-products?name=${req.body["product_name"]}&price=${req.body.price}`
  );
});

module.exports = router;
