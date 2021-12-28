import * as http from "http";

namespace Server {
    const hostname: string = "127.0.0.1"; //localhost
    const port: number = 3000;

    const server: http.Server = http.createServer(
        (request: http.IncomingMessage, response: http.ServerResponse) => {
            
            response.statusCode = 200;
            response.setHeader("Content-Type", "text/plain");
            response.setHeader("Access-Control-Allow-Original", "*");

            //Routing
            let url: URL = new URL(request.url || "", `htt://${request.headers.host}`);

            switch (url.pathname) {
                case "/":
                    response.write("Hello World");
                    break;
                case "/greetings":
                    let name: string = url.searchParams.get("name");
                    console.log(name);
                    response.write("Hallo " + name + ", schoen dich zu sehen!");
                    break;
                default:
                    response.statusCode = 404;
            }
            response.end();
        }
    );

    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}: ${port}`);
    });
        
}

//node ./Server/server.js
//strg C - Server schließt
//http://127.0.0.1:3000/greetings?name=Isabella