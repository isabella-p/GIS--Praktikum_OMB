"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Client;
(function (Client) {
    console.log("Client läuft");
    const url = "http://127.0.0.1:3001";
    const path = "/convertDate";
    const myForm = document.getElementById("myForm");
    const sendButton = document.getElementById("send-button");
    sendButton.addEventListener("click", function (evt) {
        evt.preventDefault();
        sendForm();
    });
    console.log(myForm, sendButton);
    async function sendForm() {
        let formData = new FormData(myForm);
        let query = new URLSearchParams(formData);
        let urlWithQuery = url + path + "?" + query.toString();
        console.log(urlWithQuery);
        let response = await fetch(urlWithQuery);
        let responseText = await response.text();
        console.log(responseText);
    }
    async function sendJSONStringWithPost(url, jsonString) {
        let response = await fetch(url, {
            method: "post",
            body: jsonString
        });
        console.log(response);
    }
    sendJSONStringWithPost("http://localhost:3000/", JSON.stringify({ test: "Das heutige Datum" }));
})(Client || (Client = {}));
//# sourceMappingURL=client.js.map