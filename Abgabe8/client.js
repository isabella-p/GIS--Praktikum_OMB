"use strict";
var Client;
(function (Client) {
    console.log("Client läuft");
    const url = "http://127.0.0.1:3000";
    const path = "/concertEvents";
    const inputInterpret = document.getElementById("interpret");
    const inputPrice = document.getElementById("price");
    //const display: HTMLElement = <HTMLElement>document.querySelector("#display");
    const myButton = document.querySelector("#mache-etwas");
    myButton.addEventListener("click", (event) => {
        event.preventDefault();
        myButtonHandler(event);
    });
    async function myButtonHandler(event) {
        let interpret = inputInterpret.value;
        let price = inputPrice.value;
        let concertEvent = {
            interpret: interpret,
            price: price
        };
        console.log(concertEvent);
        await sendInput(concertEvent);
    }
    async function sendInput(event) {
        await fetch(url + path, {
            method: "POST", body: JSON.stringify(event)
        });
    }
    async function sendJSONStringWithPOST(url, jsonString) {
        let response = await fetch(url, {
            method: "POST", body: jsonString
        });
    }
    function formData() {
        var formData = {};
        formData["Interpret"] = document.getElementById("Interpret").innerHTML;
        formData["price"] = document.getElementById("price").innerHTML;
        return formData;
    }
    async function requestEvent() {
        let response = await fetch("http://localhost:3000/concertEvents");
        let text = await response.text();
        console.log(JSON.parse(text));
        //return JSON.parse(text) as Event[];
    }
    /*sendJSONStringWithPOST(
        "http://localhost:3000/concertEvents",
        JSON.stringify({
            firstNameOfInterpret: "Mark Knopfler",
            price: 10
        })
    );*/
    /*sendJSONStringWithPOST(
        "http://localhost:3000/concertEvents",
        JSON.stringify({
            Interpret: "Michael Bublé",
            price: 15
        })
    );*/
    /* function onSubmitForm(event: Event) {
         let formData: FormData = new FormData(<HTMLFormElement>event.currentTarget);
         sendJSONStringWithPOST(
             "http://localhost:3000/concertEvents",
             JSON.stringify({
                 _id: formData.get("_id"),
                 Interpret: formData.get("Interpret"),
                 price: formData.get("price")
             })
         );
         event.preventDefault();
     } */
    /*async function eventLoad(): Promise<void> {
        let response: Response = await fetch("http://localhost:3000/concertEvents");
        let text: string = await response.text();
        console.log(JSON.parse(text));
    }*/
})(Client || (Client = {}));
//# sourceMappingURL=client.js.map