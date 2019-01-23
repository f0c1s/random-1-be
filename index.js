const http = require('http');
const app = require('./app');
const router = require('./routes')(app)

const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port);
