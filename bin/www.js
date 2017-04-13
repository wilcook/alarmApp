// This will be our application entry. We'll setup our server here.
const http = require('http');
const https = require('https');
const app = require('../app');

const port = parseInt(process.env.PORT, 10) || 1312;
app.set('port', port);

const server = http.createServer(app);
server.listen(port);