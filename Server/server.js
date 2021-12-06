"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
var Server;
(function (Server) {
    const hostname = "127.0.0.1"; //localhost
    const port = 3000;
    const server = http.createServer((request, response) => {
        response.statusCode = 200;
        response.setHeader("Content-Type", "text/plain");
        response.setHeader("Access-Control-Allow-Original", "*");
        //Routing
        let url = new URL(request.url || "", `htt://${request.headers.host}`);
        switch (url.pathname) {
            case "/":
                response.write("Hello World");
                break;
            case "/greetings":
                let name = url.searchParams.get("name");
                console.log(name);
                response.write("Hallo " + name + ", schön dich zu sehen!");
                break;
            default:
                response.statusCode = 404;
        }
        response.end();
    });
    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}: ${port}`);
    });
})(Server || (Server = {}));
//strg C - Server schließt
//http://127.0.0.1:3000/greetings?name=Isabella
//# sourceMappingURL=server.js.map