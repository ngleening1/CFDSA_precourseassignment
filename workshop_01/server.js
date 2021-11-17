var http = require('http');
var fs = require('fs');
var express = require('express');
var app = express();
const port = 3000;

app.use(express.static(__dirname+'/public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
  })

app.listen(port, () => console.log('The server running on Port '+ port));

// function onRequest(request, response) {
//     response.writeHead(200, {'Content-Type': 'text/html'});
//     fs.readFile('./index.html', null, function(error, data) {
//         if (error) {
//             response.writeHead(404);
//             response.write('File not found!');
//         }
//         else {
//             response.write(data);
//         }
//         response.end();
//     });
// }

// http.createServer(onRequest).listen(8000);