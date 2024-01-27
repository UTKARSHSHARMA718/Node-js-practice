const productSchema = require("../models/product");

const getAllProducts = async (req, res) => {
  // I always be getting response and request object inside the function which is getting called by the routes
  const data = await productSchema.find({ brandName: "apple" }); // for getting all the data
  res.status(200).json(data);
};

const test = (req, res) => {
  console.log("testing routes...");
  res.send("testing route...");
};

module.exports = { getAllProducts, test };
