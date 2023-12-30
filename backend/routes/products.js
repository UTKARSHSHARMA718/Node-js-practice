
const { getAllProducts, test } = require("../controllers/products");
const express = require("express");
const router = express.Router();

router.route("/").get(getAllProducts);
router.route("/test").get(test);

//exporting
module.exports = router;
