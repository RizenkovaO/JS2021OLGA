const express = require('express');

const server = express();
const port = 3000;

//server public folder
server.use(express.static(path.resolve(__dirname, 'assets')));

server.use('*', (req, res) => {
    res.send(`<!DOCTYPE html>
    <html>
    <head>
    <title>Data Storages </title>
    <script type = 'text/javascript' src ='/cookies.js'></script>
    </head>
    <body>
    <h4>Data Storage</h4>
    </body>
    </html`)
})