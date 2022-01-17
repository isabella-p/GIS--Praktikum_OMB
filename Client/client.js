"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Client;
(function (Client) {
    console.log("Client läuft");
    const url = "http://127.0.0.1:3000";
    const path = "/convertDate";
    const myForm = document.getElementById("myForm");
    const sendButton = document.getElementById("send-button");
    const antwort = document.getElementById("response");
    sendButton.addEventListener("click", function (evt) {
        evt.preventDefault();
        sendForm();
    });
    console.log(myForm, sendButton);
    async function sendForm() {
        let formData = new FormData(myForm);
        let query = new URLSearchParams(formData);
        let urlWithQuery = url + path + "?" + query.toString();
        //console.log(urlWithQuery);
        let response = await fetch(urlWithQuery);
        let responseText = await response.text();
        console.log(responseText);
        let edition = document.createElement("p");
        edition.textContent = responseText;
        antwort.appendChild(edition);
    }
})(Client || (Client = {}));
//# sourceMappingURL=client.js.map