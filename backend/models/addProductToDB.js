// That how we add some data to the mogoDb database

const { connectWithDatabase } = require("../db/connect");
const productSchema = require("../models/product");
const productData = require('../productsDummyData.json');
require("dotenv").config({path: "../.env"});

const makeConnection = async () => {
  try {
    await connectWithDatabase();
    await productSchema.create(productData); // here we have to pass the data that we want to add to out database collections
  } catch (err) {
    console.log("err", err);
  }
};

makeConnection();
