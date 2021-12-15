namespace testNamespace {
    const inputInterpret: HTMLInputElement = <HTMLInputElement> document.getElementById("input-interpret");
    const inputPrice: HTMLInputElement = <HTMLInputElement> document.getElementById("input-price");
    const display: HTMLElement = <HTMLElement> document.querySelector("#display");
    const myButton: HTMLButtonElement = <HTMLButtonElement> document.querySelector("#mache-etwas");
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
        interpret: "Mark Knopfler" + "Pink Floyd" + "Metallica" + "Micheal Bublé",
        price: 10.1 + 15.9 + 20.1 + 11.1};

    localStorage.setItem (inputInterpret.value , inputPrice.value);
    console.log(concertEvent.interpret + concertEvent.price);
    


    let array: any[] = ["Mark Knopfler", "Pink Floyd", "Metallica", "Micheal Bublé", "Dire Straits", "Mariah Carey", 
        "Cat Stevens", "Mark Forster", "Helene Fischer", "Bee Gees"];
    let arrayIGotFromLocalStorage: any[];
    let arrayString: string = JSON.stringify(array);
    
    localStorage.setItem("myArray", arrayString);
    let stringFromLocalStorage: string = localStorage.getItem("myArray");

    arrayIGotFromLocalStorage = JSON.parse(stringFromLocalStorage); 

    console.log("Das Array mit dem Key 'myArray' aus dem LocalStorage:", arrayIGotFromLocalStorage);
    console.log("Der Wert an der Stelle[0] mal den Wert an der Stelle[3]=", arrayIGotFromLocalStorage[0] * arrayIGotFromLocalStorage[3]);
    



    function myButtonHandler(): void {
        let interpretValue: string = inputInterpret.value;
        let priceValue: number = Number(inputPrice.value);
        // console.log("button click");
        
        let arrayFromStorageAsString: string = localStorage.getItem("localStorageElementName");
        let numbersArray: any = JSON.parse(arrayFromStorageAsString);
        console.log(arrayFromStorageAsString);
        console.log(numbersArray);

        console.log(numbersArray[0] * numbersArray[3]);

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
        console.log("aktueller Input: " + inputInterpret.value + inputPrice.value);
        localStorage.setItem("localStorage", inputInterpret.value + inputPrice.value);
    }

    function loadButtonHandler(): void {
        console.log("Load Button clicked");
        let valueFromLocalStorage: string = localStorage.getItem("localStorage");
        console.log("aktueller Wert im Local Storage: " + valueFromLocalStorage);
        display.textContent = valueFromLocalStorage;
    }

    function deleteEvent(parentElement: HTMLDivElement): void {
        console.log("deleteEvent wurde aufgerufen!");
        display.removeChild(parentElement);
    }


    /*
    const jsonObj: string = JSON.stringify(ConcertEvent);
    localStorage.setItem("Mark", jsonObj);

    const str: string = localStorage.getItem("Mark");
    console.log(localStorage.getItem("Mark"));
    const parseObj: any = JSON.parse(str);

    console.log(parseObj); */

}
