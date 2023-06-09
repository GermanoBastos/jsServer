const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("livros.json");
const middlewares = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);
server.listen(port);