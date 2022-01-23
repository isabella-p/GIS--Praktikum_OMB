"use strict";
var Client;
(function (Client) {
    console.log("Client läuft");
    const url = "http://127.0.0.1:3001";
    const path = "/concertEvents";
    const inputInterpret = document.getElementById("interpret");
    const inputPrice = document.getElementById("price");
    //const display: HTMLElement = <HTMLElement>document.querySelector("#display");
    const myButton = document.getElementById("mache-etwas");
    const tabelle = document.getElementById("tabelle");
    myButton.addEventListener("click", (event) => {
        event.preventDefault();
        myButtonHandler(event);
    });
    //myButton.addEventListener("click", myButtonHandler);
    console.log(myButton);
    let eventFromSever = [];
    window.addEventListener("load", () => {
        getData();
    });
    myButton.addEventListener("click", myButtonHandler);
    async function getData() {
        let response = await fetch(url + path);
        let responseText = await response.text();
        console.log(responseText);
        eventFromSever = JSON.parse(responseText);
        console.log(eventFromSever);
        for (let i = 0; i < eventFromSever.length; i++) {
            createTabelle(eventFromSever[i].interpret, eventFromSever[i].price);
        }
    }
    async function sendInput(event) {
        await fetch(url + path, {
            method: "POST", body: JSON.stringify(event)
        });
        console.log("Event was sent");
    }
    async function sendJSONStringWithPOST(url, jsonString) {
        let response = await fetch(url, {
            method: "POST", body: jsonString
        });
    }
    function readData() {
        var formData = {};
        formData["Interpret"] = document.getElementById("Interpret").innerHTML;
        formData["price"] = document.getElementById("price").innerHTML;
        return formData;
    }
    async function requestInterpret() {
        let response = await fetch("http://localhost:3001/concertEvents");
        let text = await response.text();
        console.log(JSON.parse(text));
        //return JSON.parse(text) as Event[];
    }
    async function myButtonHandler(event) {
        let interpret = inputInterpret.value;
        let price = inputPrice.value;
        event.preventDefault();
        let concertEvent = {
            interpret: interpret,
            price: price
        };
        console.log(concertEvent);
        await sendInput(concertEvent);
        createTabelle(concertEvent.interpret, concertEvent.price);
        sendJSONStringWithPOST(url + path, JSON.stringify(concertEvent));
    }
    function createTabelle(interpretValue, priceValue) {
        let deleteID = 0;
        deleteID = deleteID + 1;
        let tr = document.createElement("tr");
        let interpret = document.createElement("td");
        let price = document.createElement("td");
        let deleteButtonID = "deleteButtonID" + deleteID;
        interpret.textContent = interpretValue;
        price.textContent = priceValue;
        let deleteButton = document.createElement("deleteButton");
        deleteButton.textContent = "remove";
        deleteButton.setAttribute("id", deleteButtonID);
        tabelle.appendChild(tr);
        tr.setAttribute("id", "row-" + deleteButtonID);
        tr.appendChild(interpret);
        tr.appendChild(price);
        tr.appendChild(deleteButton);
    }
})(Client || (Client = {}));
/*sendJSONStringWithPOST(
    "http://localhost:3001/concertEvents",
    JSON.stringify({
        Interpret: "Michael Bublé",
        price: 15
    })
);

function onSubmitForm(event: Event) {
     let formData: FormData = new FormData(<HTMLFormElement>event.currentTarget);
     sendJSONStringWithPOST(
         "http://localhost:3001/concertEvents",
         JSON.stringify({
             _id: formData.get("_id"),
             Interpret: formData.get("Interpret"),
             price: formData.get("price")
         })
     );
     event.preventDefault();
 }

async function eventLoad(): Promise<void> {
    let response: Response = await fetch("http://localhost:3001/concertEvents");
    let text: string = await response.text();
    console.log(JSON.parse(text));
} */ 
//# sourceMappingURL=client.js.map