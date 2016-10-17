var http = require('http');
var url = require("url");
var fs = require('fs');

function start(route, handle) {
    function onRequest(req, res) {
        var pathname = url.parse(req.url).pathname;

        console.log("Request for " + pathname + " received.");

        route(handle, pathname);

        fs.readFile('index.html',function (err, data){
          res.writeHead(200, {
              'Content-Type': 'text/html','Content-Length':data.length
          });
          res.write(data);
          res.end();
        });
    }
    http.createServer(onRequest).listen(8080, 'localhost');
}

exports.start = start;

var http = require('http');
var fs = require('fs');
