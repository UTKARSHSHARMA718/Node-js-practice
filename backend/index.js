const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const storeRouter = require("./routes/Store");
const adminRouter = require("./routes/Admin");
// NOTE: below code will help me to reach till 'backend' folder and then I can provide the rest of the path values
const rootDirectoryPath = require("./utils/getRootDirectoryPath");

require("dotenv").config();

const app = express();

//NOTE: must be here at the top of all the middleware
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/store", storeRouter);
app.use("/api/admin", adminRouter);

app.use("/home", (req, res, next) => {
  res.send("<h1> Welcome Home! </h1>");
});

app.use("/", (req, res) => {

  //NOTE: older method res.status(404).send("<h1>Page not found!</h1>");
  res
    .status(404)
    .sendFile(path.join(rootDirectoryPath, "views", "404NotFound.html"));
});

app.listen(process.env.PORT, () => {
  console.log("listening on port" + process.env.PORT);
});
