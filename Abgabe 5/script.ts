namespace testNamespace {
    const inputInterpret: HTMLInputElement = <HTMLInputElement> document.getElementById("input-interpret");
    const inputPrice: HTMLInputElement = <HTMLInputElement> document.getElementById("input-price");
    const display: HTMLElement = <HTMLElement> document.querySelector("#display");
    const myButton: HTMLButtonElement = <HTMLButtonElement> document.querySelector("#mache-etwas");
    const inputFeld: HTMLInputElement = <HTMLInputElement> document.getElementById("input-element");
    const saveButton: HTMLButtonElement = <HTMLButtonElement> document.getElementById("save-button");
    const loadButton: HTMLButtonElement = <HTMLButtonElement> document.getElementById("load-button");


    myButton.addEventListener("click", myButtonHandler); 
    saveButton.addEventListener("click", saveButtonHandler);
    loadButton.addEventListener("click", loadButtonHandler);
    
    console.log(inputInterpret);
    console.log(inputPrice);

    
    
    interface ConcertEvent {
        interpret: string;
        price: number; }

    let concertEvent: ConcertEvent = {
        interpret: "Mark Knopfler", 
        price: 10.1
    };

    localStorage.setItem (inputInterpret.value , inputPrice.value);
    console.log(concertEvent.interpret);







    const jsonObj: string = JSON.stringify(ConcertEvent);
    localStorage.setItem("Mark", jsonObj);

    const str: string = localStorage.getItem("Mark");

    console.log(localStorage.getItem("Mark"));

    const parseObj: any = JSON.parse(str);

    console.log(parseObj);








   
    function myButtonHandler(): void {
        let interpretValue: string = inputInterpret.value;
        let priceValue: number = Number(inputPrice.value);
        // console.log("button click");
        

        // display.textContent = interpretValue + "; " + priceValue;
        let newElement: HTMLDivElement = document.createElement("div");

        let deleteButton: HTMLButtonElement = document.createElement("button");
        deleteButton.textContent = "Delete";
        
        newElement.textContent = interpretValue + "; " + priceValue;
        display.appendChild(newElement);

        newElement.appendChild(deleteButton);

        deleteButton.addEventListener("click", function(): void {
            deleteEvent(newElement);
        });

    }

    function saveButtonHandler(): void {
        console.log("Save Button clicked");
        console.log("aktueller Input: " + inputFeld.value);
        localStorage.setItem("gisPraktikum_input", inputFeld.value);
    }

    function loadButtonHandler(): void {
        console.log("Load Button clicked");
        let valueFromLocalStorage: string = localStorage.getItem("gisPraktikum_input");
        console.log("aktueller Wert im Local Storage: " + valueFromLocalStorage);
        display.textContent = valueFromLocalStorage;
    }


    function deleteEvent(parentElement: HTMLDivElement): void {
        console.log("deleteEvent wurde aufgerufen!");
        display.removeChild(parentElement);
    }

}
