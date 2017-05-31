const http = require("http");
const io = require("socket.io").listen(8080);
const redis = require('socket.io-redis');
const redisHost = "104.199.160.37";
const redisPort = "6379";

io.adapter(redis({ host: redisHost, port: redisPort }));

io.sockets.on("connection", function(socket) {
  socket.on("msg", function(data) {
    console.log("Receive message socket");
    console.log(data);
    socket.broadcast.emit(data);
  });
});
