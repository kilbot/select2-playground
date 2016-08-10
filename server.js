var port = 3000;
var jsonServer = require('json-server')
var open = require('open');

// Returns an Express server
var server = jsonServer.create();
var router = jsonServer.router('ajax.json')

// Set default middlewares (logger, static, cors and no-cache)
server.use(jsonServer.defaults({
  static: process.cwd() // parent dir
}));

//
server.use(router);
server.listen(port);
open('http://localhost:' + port);