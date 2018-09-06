(function () {
  "use strict";

  let http = require('http');
  let serveStatic = require('serve-static');

  // Note: there is no way to stop this server, we assume closing Jake will
  // close the server at the same time. Not production ready (to say the least)
  exports.run = function (path, port) {
    let serveStaticFile = serveStatic(path);
    let server = http.createServer((request, response) => {
      serveStaticFile(request, response, () => {
        response.statusCode = 404;
        response.end("File not found");
      });
    });

    server.listen(port, () => {
      console.log('Serving static files on port ' + port);
    });
  };

}());