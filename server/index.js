const WebSocket = require('ws'); // Import the 'ws' library

const server = new WebSocket.Server({ port: 8080 });
const clients = new Set(); // Store all connected clients

server.on('connection', (socket) => {
  // console.log('Client connected');
  
  // Add the client to the set of connected clients
  clients.add(socket);

  socket.on('message', (message) => {
    console.log(`Received: ${message}`);
    // Broadcast the message to all connected clients
    clients.forEach((client) => {
      // if (client.readyState === WebSocket) {
        // console.log(client);
        client.send(`${message}`);
      // }
    });
  });

  socket.on('close', () => {
    // console.log('Client disconnected');
    
    // Remove the client from the set of connected clients
    clients.delete(socket);
  });
});


