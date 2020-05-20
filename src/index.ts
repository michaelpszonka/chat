const express = require('express');
const app = express();
const http = require('http').createServer(app);
const port = 8080;
const io = require('socket.io')(http);



app.get("/", (_req: any, res: any) => {
  res.sendFile(__dirname + '/index.html')
});

io.on('connection', (socket: any) => {
  console.log(`You have connected to the host on port ${port}`)
})

http.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


