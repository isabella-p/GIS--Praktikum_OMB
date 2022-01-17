namespace Client {
    console.log("Client läuft");
    const url: string = "http://127.0.0.1:3000";
    const path: string = "/concertEvents";


    const inputInterpret: HTMLInputElement = <HTMLInputElement>document.getElementById("interpret");
    const inputPrice: HTMLInputElement = <HTMLInputElement>document.getElementById("price");
    const display: HTMLElement = <HTMLElement>document.querySelector("#display");
    const myButton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#mache-etwas");


    myButton.addEventListener("click", myButtonHandler);

    console.log(inputInterpret);
    console.log(inputPrice);

    async function sendJSONStringWithPOST(
        url: RequestInfo,
        jsonString: string
    ): Promise<void> {
        let response: Response = await fetch(url, {
            method: "post", body: jsonString
        });
    }

    interface Concert {
        firstNameOfInterpret: string;
        lastNameOfInterpret: string;
        price: number;
    }

    async function requestEvent(): Promise<Event[]> {
        let response: Response = await fetch("http://localhost:3000/concertEvents");
        let text: string = await response.text();
        return JSON.parse(text) as Event[];
    }

    sendJSONStringWithPOST(
        "http://localhost:3000/concertEvents",
        JSON.stringify({
            firstNameOfInterpret: "Mark",
            lastNameOfInterpret: "Knopfler",
            price: 10.1
        })
    );

    sendJSONStringWithPOST(
        "http://localhost:3000/concertEvents",
        JSON.stringify({
            firstNameOfInterpret: "Michael",
            lastNameOfInterpret: "Bublé",
            price: 11.1
        })
    );

    sendJSONStringWithPOST(
        "http://localhost:3000/concertEvents",
        JSON.stringify({
            firstNameOfInterpret: "Mariah",
            lastNameOfInterpret: "Carey",
            price: 1.1
        })
    );

    function onSubmitForm(event: Event) {
        let formData: FormData = new FormData(<HTMLFormElement>event.currentTarget);
        sendJSONStringWithPOST(
            "http://localhost:3000/concertEvents",
            JSON.stringify({
                _id: formData.get("_id"),
                firsttNameOfInterpret: formData.get("firstNameOfInterpret"),
                lastNameOfInterpret: formData.get("lastNameOfInterpret"),
                price: formData.get("price")
            })
        );
        event.preventDefault();
    }


    function myButtonHandler(): void {
        let interpretValue: string = inputInterpret.value;
        let priceValue: number = Number(inputPrice.value);
        // console.log("button click");


        // display.textContent = interpretValue + "; " + priceValue;
        let newElement: HTMLDivElement = document.createElement("div");

        newElement.textContent = interpretValue + "; " + priceValue;
        display.appendChild(newElement);

        /*let deleteButton: HTMLButtonElement = document.createElement("button");
        deleteButton.textContent = "Delete"; 

        newElement.appendChild(deleteButton);

        deleteButton.addEventListener("click", function(): void {
            deleteEvent(newElement);
        });*/
    }

    async function eventLoad(): Promise<void> {
        let response: Response = await fetch("http://localhost:3000/concertEvents");
        let text: string = await response.text();
        console.log(JSON.parse(text));
    }

}