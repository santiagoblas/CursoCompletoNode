/* const http = require('http');
const colores = require('colors');

const handleServer = function(req, res) {
    res.writeHead(200, {'content-type' : 'text/html'});
    res.write('<h1>Hola mundo desde NodeJS</h1>');
    res.end();
}

const server = http.createServer(handleServer);

server.listen(3000, function() {
    console.log('Servidor en el puerto 3000'.cyan);
}); */

const express = require('express');
const colores = require('colors');

const server = express();

server.get('/', function(req,res) {
    res.send('Hola Mundo');
});

server.listen(3000, function() {
    console.log('Servidor escuchando en puerto 3000'.cyan);
});