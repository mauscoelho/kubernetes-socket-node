const http = require("http");
const io = require("socket.io").listen(8081);
const redis = require('socket.io-redis');
const redisHost = "104.199.160.37";
const redisPort = "6379";

io.adapter(redis({ host: redisHost, port: redisPort }));

const handleRequest = (req, res) => {
  console.log("Receive request for URL" + req.url);
  res.writeHead(200);
  res.end("Hello Kubernates and socket");
};

const server = http.createServer(handleRequest);
server.listen(8080);
console.log(
  "server listen on " + server.address().address + server.address().port
);

io.sockets.on("connection", function(socket) {
  socket.on("msg", function(data) {
    console.log("Receive message socket");
    console.log(data);
    socket.broadcast.emit(data);
  });
});
