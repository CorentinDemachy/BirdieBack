const express = require('express');
const http = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');

const config = require('config');
const errorHandler = require('./middlewares/errorHandler');

// EXPRESS & SERVER
const app = express();
const server = http.createServer(app);

// MIDDLEWARES
app.use(cors());

app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(bodyParser.json());


// ROUTES
app.use(require('./routes'));

// ERROR HANDLER
errorHandler(app);

// RUN APP
server.listen(config.get('port'));
