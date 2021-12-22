"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Client;
(function (Client) {
    console.log("Client läuft");
    const url = "http://127.0.0.1:3000";
    const path = "/convertDate";
    //const myForm: HTMLFormElement = <HTMLFormElement> document.getElementById("myForm");
    const sendButton = document.getElementById("send-button");
    const addElement = document.getElementById("Elemet-hinzufuegen");
    const dateInput = document.getElementById("datum-input");
    sendButton.addEventListener("click", function (evt) {
        evt.preventDefault();
        sendForm();
    });
    //console.log(myForm, sendButton);
    async function sendForm() {
        // let formData: FormData = new FormData(myForm);
        // let query: URLSearchParams = new URLSearchParams(<any>formData);
        // let urlWithQuery: string = url + path + "?" + query.toString();
        // console.log(urlWithQuery);
        let urlWithQuery = url + path + "?b=" + JSON.stringify(new Date(dateInput.value));
        let response = await fetch(urlWithQuery);
        let responseText = await response.text();
        console.log(responseText);
        addElement.innerText = responseText;
    }
    /*async function sendJSONStringWithPost (url: RequestInfo, jsonString: string): Promise<void> {
        let response: Response = await fetch(url, {
            method: "post",
            body: jsonString
        });
        console.log(response);
    }

    sendJSONStringWithPost(
        "http://localhost:3000/",
        JSON.stringify({test: "Das heutige Datum"})
    );*/
})(Client || (Client = {}));
//# sourceMappingURL=client.js.map