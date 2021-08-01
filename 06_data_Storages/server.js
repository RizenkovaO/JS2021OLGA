const path = require("path");
const express = require("express");

const server = express();
const port = 3000;

server.use(express.static(path.resolve(__dirname, "assets")));
server.use("*", (req, res) =>{
  res.setHeader("Set-Cookie",`serverCookie=secret;SameSite=Strict;`);
  res.setHeader("Set-Cookie",`API_TOKEN=123;serverCookieSecret=superSecret;SameSite=Strict;HttpOnly;Secure;Domain=localhost;`.replace(/\n/g,''));
  res.send(`<!DOCTYPE html>
    <html>
        <head>
            <title>Data Storages</title>
            <script type = "text/javascript" src="/cookies.js"></script>
            <script type = "text/javascript" src="/webstorages.js"></script>
            <script type = "text/javascript" src="/serialize.js"></script>
            <script type = "text/javascript" src="/format.js"></script>
        </head>
        <body>
            <h4>Data Storages</h4>
        </body>
    </html>`);
});

server.listen(port, () => {
  console.log(`Running App at http://localhost:${port}`);
});
