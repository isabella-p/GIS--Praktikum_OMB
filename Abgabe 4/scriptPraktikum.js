"use strict";
var testNamespace;
(function (testNamespace) {
    const inputInterpret = document.getElementById("input-interpret");
    const inputPrice = document.getElementById("input-price");
    const display = document.querySelector("#display");
    const myButton = document.querySelector("#mache-etwas");
    let arrayFromStorageAsString = localStorage.getItem("localStorageElement");
    let numbersArray = JSON.parse(arrayFromStorageAsString);
    myButton.addEventListener("click", myButtonHandler);
    console.log(inputInterpret);
    console.log(inputPrice);
    let array = [12, 15, 17, 20];
    let arrayIGotFromLocalStorage;
    let arrayString = JSON.stringify(array);
    localStorage.setItem("localStorageElement", arrayString);
    let stringFromLocalStorage = localStorage.getItem("myArray");
    arrayIGotFromLocalStorage = JSON.parse(stringFromLocalStorage);
    console.log("Das Array mit dem Key 'myArray' aus dem LocalStorage:", arrayIGotFromLocalStorage);
    console.log("Der Wert an der Stelle[0] mal den Wert an der Stelle[2]=", arrayIGotFromLocalStorage[0] * arrayIGotFromLocalStorage[2]);
    function myButtonHandler() {
        let interpretValue = inputInterpret.value;
        let priceValue = Number(inputPrice.value);
        // console.log("button click");
        let arrayFromStorageAsString = localStorage.getItem("localStorageElement");
        let numbersArray = JSON.parse(arrayFromStorageAsString);
        console.log(arrayFromStorageAsString);
        console.log(numbersArray);
        console.log(numbersArray[0] * numbersArray[2]);
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
    function deleteEvent(parentElement) {
        console.log("deleteEvent wurde aufgerufen!");
        display.removeChild(parentElement);
    }
})(testNamespace || (testNamespace = {}));
//# sourceMappingURL=scriptPraktikum.js.map