const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const storeRouter = require("./routes/Store");
const adminRouter = require("./routes/Admin");
const booksRouter = require("./routes/AddBooks");
// NOTE: below code will help me to reach till 'backend' folder and then I can provide the rest of the path values
const rootDirectoryPath = require("./utils/getRootDirectoryPath");

require("dotenv").config();

const app = express();

//NOTE: must be here at the top of all the middleware
app.use(bodyParser.urlencoded({ extended: true }));

// NOTE: path.join(__dirname) provide us the path till current folder (inside which we are right now)
// console.log(
//   path.join(__dirname, "public")
// );

app.use(express.static(path.join(__dirname, "public")));

app.use("/api/store", storeRouter);
app.use("/api/admin", adminRouter);
app.use("/api/books", booksRouter);

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
