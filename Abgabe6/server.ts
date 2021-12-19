import * as http from "http";

namespace Server {
    const hostname: string = "127.0.0.1"; //localhost
    const port: number = 3001;

    const server: http.Server = http.createServer(
        (request: http.IncomingMessage, response: http.ServerResponse) => {
            
            response.statusCode = 200;
            response.setHeader("Content-Type", "text/plain");
            response.setHeader("Access-Control-Allow-Original", "*");

            //Routing
            let url: URL = new URL(request.url || "", `http://${request.headers.host}`);

            switch (url.pathname) {
                case "/":
                    response.write("Server erreichbar");
                    break;
                case "/convertDate":

                    /*
                    let day: any = url.searchParams.get("day");
                    console.log(day);
                    let month: any = url.searchParams.get("month");
                    console.log(month);
                    let year: any = url.searchParams.get("year");
                    console.log(year);
                    */

                    let date: Date = new Date(JSON.parse(url.searchParams.get("newDate")));
                    //let newDate: Date = url.searchParams.get("date");
                    console.log(date);

                    response.write("Date: " + date);
                    break;
                    //http://127.0.0.1:3001/convertDate?date=12.November.2021

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

// npm start
//node ./Abgabe6/server.js
//strg C - Server schließt

//http://127.0.0.1:3000/greetings?name=Isabella