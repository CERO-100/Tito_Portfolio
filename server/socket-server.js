const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: true,
    methods: ["GET", "POST"]
  }
});

// Simple in-memory messages store for demo
const messages = [];

io.on('connection', (socket) => {
  const username = (socket.handshake && socket.handshake.query && socket.handshake.query.username) || 'anonymous';
  console.log(`Socket connected: ${socket.id} (username=${username})`);

  // send existing messages to the connecting client
  socket.emit('msgs-receive-init', messages);

  socket.on('msg-send', (msg) => {
    const message = {
      socketId: socket.id,
      content: msg.content,
      time: new Date(),
      username: msg.username || username,
    };
    messages.push(message);
    io.emit('msg-receive', message);
  });

  socket.on('disconnect', () => {
    console.log(`Socket disconnected: ${socket.id}`);
  });
});

const PORT = process.env.SOCKET_PORT || 3001;
server.listen(PORT, () => console.log(`Socket server listening on http://localhost:${PORT}`));
