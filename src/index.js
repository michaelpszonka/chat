"use strict";
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const port = 8080;
const io = require('socket.io')(http);
app.get("/", (_req, res) => {
    res.send("Hello world");
});
io.on('connection', (socket) => {
    console.log(`You have connected to the host on port ${port}`);
    console.log(socket);
});
http.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
//# sourceMappingURL=index.js.map