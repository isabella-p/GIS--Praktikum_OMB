import * as http from "http";
import * as mongo from "mongodb";

namespace Client {
    const hostname: string = "127.0.0.1"; //localhost
    const port: number = 3000;
    const mongoUrl: string = "mongodb://localhost:27017"; // für lokale MongoDB
    let mongoClient: mongo.MongoClient = new mongo.MongoClient(mongoUrl);

    async function dbFind(
        db: string,
        collection: string,
        requestObject: any,
        response: http.ServerResponse
    ) {
        let result = await mongoClient
            .db(db)
            .collection(collection)
            .find(requestObject)
            .toArray();

        response.setHeader("Content-Type", "application/json");
        response.write(JSON.stringify(result));
    }

    const server: http.Server = http.createServer(
        async (request: http.IncomingMessage, response: http.ServerResponse) => {

            response.statusCode = 200;
            //response.setHeader("Content-Type", "text/plain");
            response.setHeader("Access-Control-Allow-Original", "*");

            //Routing
            let url: URL = new URL(request.url || "", `http://${request.headers.host}`);

            switch (url.pathname) {
                case "/":
                    response.write("Server erreichbar");
                    break;

                case "/concertEvents":
                    await mongoClient.connect();

                    switch (request.method) {
                        case "GET":
                            await dbFind(
                                "meineEvents",
                                "concertEventsCol",
                                {
                                    concertNr: Number(url.searchParams.get("concertNr"))
                                },
                                response
                            );

                            break;

                        case "POST":
                            let jsonString = "";
                            request.on("data", data => {
                                jsonString += data;
                            });
                            request.on("end", async () => {
                                mongoClient
                                    .db("meineEvents")
                                    .collection("concertEventsCol")
                                    .insertOne(JSON.parse(jsonString));
                            });
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

}