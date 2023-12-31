const http = require("http");
const fs = require('fs');
require("dotenv").config();

const PORT = process.env.PORT || 3030;
http
  .createServer((req, res) => {
    const { method, url } = req;
    console.log({ method, url });
    if (url === "/") {
      res.setHeader("Content-Type", "text/html");
      res.write("<html>");
      res.write("<head>");
      res.write("<title> Learning </title>");
      res.write(`<body> 
        <form action
        ="/send_name" method="POST">
        <input type="text" name="name"/>
        <button type="submit">
        submit
        </button>
        </form>
      </body>`);
      res.write("</title>");
      res.write("</head>");
      res.write("</html>");
      return res.end();
    }

    if(url === "/send_name") {
      //using buffer
      const data = [];
      req.on('data',(data_in_form_of_chunk)=>{
        data.push(data_in_form_of_chunk);
        console.log({data_in_form_of_chunk})
      })
      req.on('end',()=>{
        const bodyData = Buffer.concat(data).toString();
        const actualMessage = bodyData.split("=")[1];
        console.log({actualMessage});
        fs.writeFileSync("data.txt", actualMessage); // why Syn?
      })
      return res.end();
    }
  })
  .listen(PORT);
