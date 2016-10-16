var server = require("./lib/server");
var router = require("./lib/router");
var requestHandlers = require("./lib/requestHandlers");

var handle = {};

handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

server.start(router.route, handle);
