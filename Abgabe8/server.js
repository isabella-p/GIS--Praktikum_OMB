"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const mongo = require("mongodb");
var Client;
(function (Client) {
    const hostname = "127.0.0.1"; //localhost
    const port = 3000;
    const mongoUrl = "mongodb://localhost:27017"; // für lokale MongoDB
    let mongoClient = new mongo.MongoClient(mongoUrl);
    async function dbFind(db, collection, requestObject, response) {
        let result = await mongoClient
            .db(db)
            .collection(collection)
            .find(requestObject)
            .toArray();
        response.setHeader("Content-Type", "application/json");
        response.write(JSON.stringify(result));
    }
    const server = http.createServer(async (request, response) => {
        response.statusCode = 200;
        //response.setHeader("Content-Type", "text/plain");
        response.setHeader("Access-Control-Allow-Original", "*");
        response.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE");
        //Routing
        let url = new URL(request.url || "", `http://${request.headers.host}`);
        switch (url.pathname) {
            case "/":
                response.write("Server erreichbar");
                break;
            case "/concertEvents":
                await mongoClient.connect();
                switch (request.method) {
                    case "GET":
                        await dbFind("events", "interpret", {}, response);
                        break;
                    case "POST":
                        let jsonString = "";
                        request.on("data", data => {
                            jsonString += data;
                        });
                        request.on("end", async () => {
                            mongoClient
                                .db("events")
                                .collection("interpret")
                                .insertOne(JSON.parse(jsonString));
                        });
                        response.write("rueckgabeInput");
                        break;
                }
            default:
                response.statusCode = 404;
        }
        response.end();
    });
    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}`);
    });
})(Client || (Client = {}));
//# sourceMappingURL=server.js.map