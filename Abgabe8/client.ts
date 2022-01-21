namespace Client {
    console.log("Client läuft");
    const url: string = "http://127.0.0.1:3000";
    const path: string = "/concertEvents";


    const inputInterpret: HTMLInputElement = <HTMLInputElement>document.getElementById("interpret");
    const inputPrice: HTMLInputElement = <HTMLInputElement>document.getElementById("price");
    //const display: HTMLElement = <HTMLElement>document.querySelector("#display");
    const myButton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#mache-etwas");


    myButton.addEventListener("click", (event) => {
        event.preventDefault();
        myButtonHandler(event);
    });

    //console.log(inputInterpret);
    //console.log(inputPrice);

    interface concertEvent {
        interpret: string;
        price: string;
    }

    async function myButtonHandler(event: Event): Promise <void> {
        let interpret: string = inputInterpret.value;
        let price: string = inputPrice.value;
        let concertEvent: concertEvent = {
            interpret: interpret,
            price: price
        };
        console.log(concertEvent);
        await sendInput(concertEvent);
    }

    async function sendInput (event: concertEvent): Promise <void> {
        await fetch (url + path, {
            method: "POST", body: JSON.stringify(event)
        });
    }

    async function sendJSONStringWithPOST(
        url: RequestInfo,
        jsonString: string
    ): Promise<void> {
        let response: Response = await fetch(url, {
            method: "POST", body: jsonString
        });
    }

    function formData () {
        var formData: any = {};
        formData["Interpret"] = document.getElementById("Interpret").innerHTML;
        formData["price"] = document.getElementById("price").innerHTML;
        return formData;
    }

    async function requestEvent(): Promise<void> {
        let response: Response = await fetch("http://localhost:3000/concertEvents");
        let text: string = await response.text();
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

}