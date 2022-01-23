namespace Client {
    console.log("Client läuft");
    const url: string = "http://127.0.0.1:3001";
    const path: string = "/concertEvents";


    const inputInterpret: HTMLInputElement = <HTMLInputElement>document.getElementById("interpret");
    const inputPrice: HTMLInputElement = <HTMLInputElement>document.getElementById("price");
    //const display: HTMLElement = <HTMLElement>document.querySelector("#display");
    const myButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("mache-etwas");
    const tabelle: HTMLElement = <HTMLElement>document.getElementById("tabelle");

    myButton.addEventListener("click", (event) => {
        event.preventDefault();
        myButtonHandler(event);
    });
    //myButton.addEventListener("click", myButtonHandler);
    //console.log(myButton);
    //console.log(inputInterpret);
    //console.log(inputPrice);

    interface concertEvent {
        interpret: string;
        price: string;
    }

    let eventFromSever: concertEvent[] = [];
    window.addEventListener("load", () => {
        getData();
    });
    //myButton.addEventListener("click", myButtonHandler);

    async function getData(): Promise<void> {
        let response: Response = await fetch(url + path);
        let responseText: string = await response.text();
        console.log(responseText);
        eventFromSever = JSON.parse(responseText);
        console.log(eventFromSever);

        for (let i: number = 0; i < eventFromSever.length; i++) {
            createTabelle(eventFromSever[i].interpret, eventFromSever[i].price);
        }
    }

    async function sendInput(event: concertEvent): Promise<void> {
        await fetch(url + path, {
            method: "POST", body: JSON.stringify(event)
        });
        console.log("Event was sent");
    }

    async function sendJSONStringWithPOST(url: RequestInfo, jsonString: string): Promise<void> {
        let response: Response = await fetch(url, {
            method: "POST", body: jsonString
        });
    }

    async function myButtonHandler(event: Event): Promise<void> {
        let interpret: string = inputInterpret.value;
        let price: string = inputPrice.value;

        event.preventDefault();
        let concertEvent: concertEvent = {
            interpret: interpret,
            price: price
        };
        console.log(concertEvent);
        await sendInput(concertEvent);

        createTabelle(concertEvent.interpret, concertEvent.price);
        sendJSONStringWithPOST(url + path, JSON.stringify(concertEvent));
    }

    function createTabelle(interpretValue: string, priceValue: string): void {
        let deleteID: number = 0;
        deleteID = deleteID + 1;
        let tr: HTMLElement = document.createElement("tr");
        let interpret: HTMLElement = document.createElement("td");
        let price: HTMLElement = document.createElement("td");
        let deleteButtonID: string = "deleteButtonID" + deleteID;
        interpret.textContent = interpretValue;
        price.textContent = priceValue;

        let deleteButton: HTMLElement = document.createElement("deleteButton");
        deleteButton.textContent = "remove";
        deleteButton.setAttribute("id", deleteButtonID);

        tabelle.appendChild(tr);
        tr.setAttribute("id", "row-" + deleteButtonID);
        tr.appendChild(interpret);
        tr.appendChild(price);
        tr.appendChild(deleteButton);
    }

    function readData() {
        var formData: any = {};
        formData["Interpret"] = document.getElementById("Interpret").innerHTML;
        formData["price"] = document.getElementById("price").innerHTML;
        return formData;
    }

    async function requestInterpret(): Promise<void> {
        let response: Response = await fetch("http://localhost:3001/concertEvents");
        let text: string = await response.text();
        console.log(JSON.parse(text));
        //return JSON.parse(text) as Event[];
    }
}

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