const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
const { connectWithDatabase } = require("./db/connect");

app.use(cors());

const all_products_routes = require("./routes/products");
app.use("/api/products", all_products_routes);

const PORT = process.env.PORT || 9090;

app.get("/", (req, res) => {
  res.status(200).send("Hello world!");
});

const startServer = async () => {
  try {
    await connectWithDatabase();
    app.listen(PORT, () => {
      console.log("listening at 3001");
    }); 
  } catch (err) {
    console.log("err", err);
  }
};

startServer();