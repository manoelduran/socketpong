const apiServer = require('../backend/api')
const httpServer = require('http').createServer(apiServer)
const sockets = require('./sockets')
const io = require('socket.io')(httpServer, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST']
    }
  });

  const PORT = 3005;
sockets.listen(io)
httpServer.listen(PORT);
console.log(`Listening on port ${PORT}...`);

