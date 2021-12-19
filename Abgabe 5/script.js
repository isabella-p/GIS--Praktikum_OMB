"use strict";
var testNamespace;
(function (testNamespace) {
    const inputInterpret = document.getElementById("input-interpret");
    const inputPrice = document.getElementById("input-price");
    const display = document.querySelector("#display");
    const myButton = document.querySelector("#mache-etwas");
    //const saveButton: HTMLButtonElement = <HTMLButtonElement> document.getElementById("save-button");
    const loadButton = document.getElementById("load-button");
    const inputFeld = document.getElementById("input-element");
    myButton.addEventListener("click", myButtonHandler);
    console.log(inputInterpret);
    console.log(inputPrice);
    const array = [];
    function myButtonHandler() {
        let interpretValue = inputInterpret.value;
        let priceValue = Number(inputPrice.value);
        // console.log("button click");
        array.push([interpretValue, priceValue]);
        localStorage.setItem("gisPraktikum_input", JSON.stringify(array));
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
    //saveButton.addEventListener("click", saveButtonHandler);
    loadButton.addEventListener("click", loadButtonHandler);
    /*function saveButtonHandler(): void {
        console.log("Save Button clicked");
        console.log("aktueller Input: " + inputInterpret.value + inputPrice.value);
        localStorage.setItem("localStorage", inputInterpret.value + inputPrice.value);
    }
    */
    function loadButtonHandler() {
        console.log("Load Button clicked");
        let valueFromLocalStorage = localStorage.getItem("gisPraktikum_input");
        console.log("aktueller Wert im Local Storage: " + valueFromLocalStorage);
        display.textContent = valueFromLocalStorage;
    }
    loadButtonHandler();
    function deleteEvent(parentElement) {
        console.log("deleteEvent wurde aufgerufen!");
        display.removeChild(parentElement);
        let deleteEventId = deleteEvent.arguments.id;
        console.log(deleteEventId);
        let tr = document.getElementById("delete" + deleteEventId);
        tr.remove();
    }
    /*
    const jsonObj: string = JSON.stringify(ConcertEvent);
    localStorage.setItem("Mark", jsonObj);

    const str: string = localStorage.getItem("Mark");
    console.log(localStorage.getItem("Mark"));
    const parseObj: any = JSON.parse(str);

    console.log(parseObj);
    
    
    
    interface ConcertEvent {
        interpret: string;
        price: number; }

    let concertEvent: ConcertEvent = {
        interpret: "Mark Knopfler" + "Pink Floyd" + "Metallica" + "Micheal Bublé",
        price: 10.1 + 15.9 + 20.1 + 11.1};

    localStorage.setItem (inputInterpret.value , inputPrice.value);
    console.log(concertEvent.interpret + concertEvent.price);
    

    let arrayIGotFromLocalStorage: any[];
    let arrayString: string = JSON.stringify(array);
    
    localStorage.setItem("myArray", arrayString);
    let stringFromLocalStorage: string = localStorage.getItem("myArray");

    arrayIGotFromLocalStorage = JSON.parse(stringFromLocalStorage);

    console.log("Das Array mit dem Key 'myArray' aus dem LocalStorage:", arrayIGotFromLocalStorage);
    console.log("Der Wert an der Stelle[0] mal den Wert an der Stelle[3]=", arrayIGotFromLocalStorage[0] * arrayIGotFromLocalStorage[3]);
    
*/
})(testNamespace || (testNamespace = {}));
//# sourceMappingURL=script.js.map