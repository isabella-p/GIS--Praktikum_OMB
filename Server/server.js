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
        let url = new URL(request.url || "", `http://${request.headers.host}`);
        switch (url.pathname) {
            case "/":
                response.write("Server erreichbar");
                break;
            case "/convertDate":
                // let newDate: Date = new Date(JSON.parse(url.searchParams.get("newDate")));
                let date = url.searchParams.get("Date").toString();
                console.log(date);
                const dateSeparate = date.split("/");
                const dateText = "Day: " + dateSeparate[2] + " Month: " + dateSeparate[1] + " Year: " + dateSeparate[0];
                response.write(dateText);
                break;
            //http://127.0.0.1:3001/convertDate?date=12.November.2021
            default:
                response.statusCode = 404;
        }
        response.end();
    });
    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}: ${port}`);
    });
})(Server || (Server = {}));
//npm start
//node ./Abgabe6/server.js
//strg C - Server schließt
//http://127.0.0.1:3000/greetings?name=Isabella
//# sourceMappingURL=server.js.map