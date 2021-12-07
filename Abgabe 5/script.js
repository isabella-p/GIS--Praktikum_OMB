"use strict";
var testNamespace;
(function (testNamespace) {
    const inputInterpret = document.getElementById("input-interpret");
    const inputPrice = document.getElementById("input-price");
    const display = document.querySelector("#display");
    const myButton = document.querySelector("#mache-etwas");
    const inputFeld = document.getElementById("input-element");
    const saveButton = document.getElementById("save-button");
    const loadButton = document.getElementById("load-button");
    myButton.addEventListener("click", myButtonHandler);
    saveButton.addEventListener("click", saveButtonHandler);
    loadButton.addEventListener("click", loadButtonHandler);
    console.log(inputInterpret);
    console.log(inputPrice);
    let concertEvent = {
        interpret: "Mark Knopfler",
        price: 10.1
    };
    localStorage.setItem(inputInterpret.value, inputPrice.value);
    console.log(concertEvent.interpret);
    const jsonObj = JSON.stringify(ConcertEvent);
    localStorage.setItem("Mark", jsonObj);
    const str = localStorage.getItem("Mark");
    console.log(localStorage.getItem("Mark"));
    const parseObj = JSON.parse(str);
    console.log(parseObj);
    function myButtonHandler() {
        let interpretValue = inputInterpret.value;
        let priceValue = Number(inputPrice.value);
        // console.log("button click");
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
    function saveButtonHandler() {
        console.log("Save Button clicked");
        console.log("aktueller Input: " + inputFeld.value);
        localStorage.setItem("gisPraktikum_input", inputFeld.value);
    }
    function loadButtonHandler() {
        console.log("Load Button clicked");
        let valueFromLocalStorage = localStorage.getItem("gisPraktikum_input");
        console.log("aktueller Wert im Local Storage: " + valueFromLocalStorage);
        display.textContent = valueFromLocalStorage;
    }
    function deleteEvent(parentElement) {
        console.log("deleteEvent wurde aufgerufen!");
        display.removeChild(parentElement);
    }
})(testNamespace || (testNamespace = {}));
//# sourceMappingURL=script.js.map