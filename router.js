function route (handle, pathname){

	console.log("A punto de rutear una petición para"+ pathname);
  if (typeof handle[pathname] === 'function') {
    return handle[pathname]();
  } else {
    console.log("No se encontro manipulador para " + pathname);
    return "404 No Encontrado";
  }
}
exports.route=route;
var http = require("http");
var url = require("url");

function iniciar(route) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Peticion para " + pathname + " recibida.");

    route(pathname);

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("Hola Mundo");
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Servidor Iniciado.");
}

exports.iniciar = iniciar;
