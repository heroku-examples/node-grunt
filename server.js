var express = require('express');
var fs = require('fs');
var path = require('path');
var PORT = process.env.PORT || 3000;
var FACTORIAL = path.join(__dirname, 'build', 'factorial.min.js');

express()
  .use(hello)
  .listen(PORT, onListen);

function hello(req, res, next) {
  res.sendFile(FACTORIAL);
}

function onListen() {
  console.log('Listening on', PORT);
}
