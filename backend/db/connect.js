const mongoose = require("mongoose");
require("dotenv").config();

const connectWithDatabase = async () => {
  console.log({v: process.env.DB_URL});
  return mongoose.connect(process.env.DB_URL, {});
};

module.exports = { connectWithDatabase };
