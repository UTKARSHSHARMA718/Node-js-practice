const mongoose = require("mongoose");

const productSechema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name"],
  },
  price: {
    type: Number,
    required: [true, "Please provide price"],
  },
  brandName: {
    type: String,
    required: [true, "Please provide brand name"],
    enum: {
      values: ["apple", "samsung", "google", "academics"], // list of valid values
      message: `{VALUE} is not of any supported type`, // error message if the entered value is not a valid value
    },
  },
  country: {
    type: String,
    required: [true, "Please provide country name"],
  },
  rating: {
    type: Number,
    default: 1,
    required: [true, "Please provide rating"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Product", productSechema); // this is how we should export mongoose schemas
