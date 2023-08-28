const http = require('http');
const SimplePeerServer = require('../src/simple-peer-server');
var rooms = []
const server = http.createServer();
const spServer = new SimplePeerServer(server, rooms, true);

server.listen(8081);
