import express from 'express';
import http from 'http';
import socketIO from 'socket.io';

const port = 4001;
const MESSAGE_SOCKET = 'MESSAGE SOCKET';

const app = express();

// our server instance
const server = http.createServer(app);

// This creates our socket using the instance of the server
const io = socketIO(server);

let messageQueues = [];

// This is what the socket.io syntax is like, we will work this later
io.on('connection', socket => {
  console.log('New client connected');

  // just like on the client side, we have a socket.on method that takes a callback function
  socket.on(MESSAGE_SOCKET, (message) => {
    // once we get a 'change color' event from one of our clients, we will send it to the rest of the clients
    // we make use of the socket.emit method again with the argument given to use from the callback function above
    console.log('New message: ', message);
    // Proccess message
    messageQueues.push(message);
    io.sockets.emit(MESSAGE_SOCKET, messageQueues);
  });

  // disconnect is fired when a client leaves the server
  socket.on('disconnect', () => {
    console.log('User disconnected');
    messageQueues = [];
  })
});

server.listen(port, () => console.log(`Listening on port ${port}`));