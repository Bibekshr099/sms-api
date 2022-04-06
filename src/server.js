import http from 'http';
import config from './config.js';
import app from './app.js';

const server = http.createServer(app);

server.on('listening', () => {
  console.log(`Listening on port ${config.port}.`);
});

server.on('error', (err) => {
  throw err;
});

server.listen(config.port);
