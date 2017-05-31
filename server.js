const http = require("http");
const handleRequest = (req, res) => {	
  console.log("Receive request for URL" + req.url);
  res.writeHead(200);
  res.end("Hello Kubernates and socket");
};
const server = http.createServer(handleRequest);
server.listen(8080);
console.log("server listen on " + server.address().address + server.address().port);
