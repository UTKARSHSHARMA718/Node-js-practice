const http = require("http");
require("dotenv").config();
// const cors = require('cors');;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" }); // for setting up the response headers
  res.write(
    JSON.stringify({
      name: "Nihil",
    })
  );
  res.end();
});

server.listen(process.env.PORT);
