"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Client;
(function (Client) {
    console.log("Client läuft");
    const url = "http://127.0.0.1:3000";
    const path = "/concertEvents";
    const inputInterpret = document.getElementById("input-interpret");
    const inputPrice = document.getElementById("input-price");
    const display = document.querySelector("#display");
    const myButton = document.querySelector("#mache-etwas");
    myButton.addEventListener("click", myButtonHandler);
    console.log(inputInterpret);
    console.log(inputPrice);
    function myButtonHandler() {
        let interpretValue = inputInterpret.value;
        let priceValue = Number(inputPrice.value);
        // console.log("button click");
        // display.textContent = interpretValue + "; " + priceValue;
        let newElement = document.createElement("div");
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        newElement.textContent = interpretValue + "; " + priceValue;
        display.appendChild(newElement);
        newElement.appendChild(deleteButton);
        deleteButton.addEventListener("click", function () {
            deleteEvent(newElement);
        });
    }
    function deleteEvent(parentElement) {
        console.log("deleteEvent wurde aufgerufen!");
        display.removeChild(parentElement);
    }
})(Client || (Client = {}));
//# sourceMappingURL=client.js.map