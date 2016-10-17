var http = require('http');
var url = require("url");
var fs = require('fs');

function start(route, handle) {
    fs.readFile('./index.html', function(err, html) {
        function onRequest(req, res) {
            var pathname = url.parse(req.url).pathname;

            console.log("Request for " + pathname + " received.");

            route(handle, pathname);

            res.writeHead(200, {
                'Content-Type': 'text/plain'
            });
            res.write(html);
            res.end();
        }
    });
    http.createServer(onRequest).listen(8080, 'localhost');
}

exports.start = start;
