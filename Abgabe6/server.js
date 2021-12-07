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
                response.write("Server erreichbar");
                break;
            case "/convertDate":
                let day = url.searchParams.get("day");
                console.log(day);
                let month = url.searchParams.get("month");
                console.log(month);
                let year = url.searchParams.get("year");
                console.log(year);
                response.write("Day: " + day + ", Month: " + month + ", Year: " + year);
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
//node ./Server/server.js
//strg C - Server schließt
//http://127.0.0.1:3000/greetings?name=Isabella
//# sourceMappingURL=server.js.map