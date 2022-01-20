"use strict";
var Client;
(function (Client) {
    console.log("Client läuft");
    const url = "http://127.0.0.1:3000";
    const path = "/concertEvents";
    const inputInterpret = document.getElementById("interpret");
    const inputPrice = document.getElementById("price");
    const display = document.querySelector("#display");
    const myButton = document.querySelector("#mache-etwas");
    myButton.addEventListener("click", myButtonHandler);
    console.log(inputInterpret);
    console.log(inputPrice);
    async function sendJSONStringWithPOST(url, jsonString) {
        let response = await fetch(url, {
            method: "post", body: jsonString
        });
    }
    async function requestEvent() {
        let response = await fetch("http://localhost:3000/concertEvents");
        let text = await response.text();
        return JSON.parse(text);
    }
    sendJSONStringWithPOST("http://localhost:3000/concertEvents", JSON.stringify({
        firstNameOfInterpret: "Mark",
        lastNameOfInterpret: "Knopfler",
        price: 10.1
    }));
    sendJSONStringWithPOST("http://localhost:3000/concertEvents", JSON.stringify({
        firstNameOfInterpret: "Michael",
        lastNameOfInterpret: "Bublé",
        price: 11.1
    }));
    sendJSONStringWithPOST("http://localhost:3000/concertEvents", JSON.stringify({
        firstNameOfInterpret: "Mariah",
        lastNameOfInterpret: "Carey",
        price: 1.1
    }));
    function onSubmitForm(event) {
        let formData = new FormData(event.currentTarget);
        sendJSONStringWithPOST("http://localhost:3000/concertEvents", JSON.stringify({
            _id: formData.get("_id"),
            firsttNameOfInterpret: formData.get("firstNameOfInterpret"),
            lastNameOfInterpret: formData.get("lastNameOfInterpret"),
            price: formData.get("price")
        }));
        event.preventDefault();
    }
    function myButtonHandler() {
        let interpretValue = inputInterpret.value;
        let priceValue = Number(inputPrice.value);
        // console.log("button click");
        // display.textContent = interpretValue + "; " + priceValue;
        let newElement = document.createElement("div");
        newElement.textContent = interpretValue + "; " + priceValue;
        display.appendChild(newElement);
        /*let deleteButton: HTMLButtonElement = document.createElement("button");
        deleteButton.textContent = "Delete";

        newElement.appendChild(deleteButton);

        deleteButton.addEventListener("click", function(): void {
            deleteEvent(newElement);
        });*/
    }
    async function eventLoad() {
        let response = await fetch("http://localhost:3000/concertEvents");
        let text = await response.text();
        console.log(JSON.parse(text));
    }
})(Client || (Client = {}));
//# sourceMappingURL=client.js.map