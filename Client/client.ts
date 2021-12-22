import { request } from "http";

namespace Client {
    console.log("Client läuft");
    const url: string = "http://127.0.0.1:3000";
    const path: string = "/convertDate";

    const myForm: HTMLFormElement = <HTMLFormElement> document.getElementById("myForm");
    const sendButton: HTMLButtonElement = <HTMLButtonElement> document.getElementById("send-button");
    //const addElement: HTMLButtonElement = <HTMLButtonElement> document.getElementById("Elemet-hinzufuegen");
    //const dateInput: HTMLInputElement = <HTMLInputElement> document.getElementById("datum-input");

    sendButton.addEventListener("click", function (evt: Event) {
        evt.preventDefault();
        sendForm();
    });

    //console.log(myForm, sendButton);

    async function sendForm(): Promise<void> {
       let formData: FormData = new FormData(myForm);
       let query: URLSearchParams = new URLSearchParams(<any>formData);
       let urlWithQuery: string = url + path + "?" + query.toString();
       console.log(urlWithQuery);
      
      // let urlWithQuery: string = url + path + "?b=" + JSON.stringify(new Date (dateInput.value));
      
       let response: Response = await fetch(urlWithQuery);
       let responseText: string = await response.text();
       console.log(responseText); 
      //addElement.innerText = responseText;
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
    
}