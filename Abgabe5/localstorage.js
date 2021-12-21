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
        // display.textContent = interpretValue + "; " + priceValue;
        let newElement = document.createElement("div");
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        array.push([interpretValue, priceValue]);
        localStorage.setItem("gisPraktikum_input", JSON.stringify(array));
        newElement.textContent = interpretValue + "; " + priceValue;
        display.appendChild(newElement);
        newElement.appendChild(deleteButton);
        deleteButton.addEventListener("click", function () {
            deleteEvent(newElement);
        });
    }
    function createEvent(interpret, price) {
        let tr = document.createElement("tr");
        let interpretElement = document.createElement("td");
        let priceElement = document.createElement("td");
        let deleteElement = document.createElement("td");
        let deleteButtonElement = document.createElement("delete-button");
        tr.id = "delete" + elementID.toString();
        deleteButtonElement.id = elementID.toString();
        interpretElement.innerText = interpret;
        priceElement.innerText = price + "";
        deleteButtonElement.innerText = "delete";
        deleteElement.append(deleteButtonElement);
        deleteElement.addEventListener("click", deleteEvent);
        tr.appendChild(interpretElement);
        tr.appendChild(priceElement);
        tr.appendChild(deleteElement);
        eventtabelle.appendChild(tr);
        elementID++;
    }
    //saveButton.addEventListener("click", saveButtonHandler);
    //function saveButtonHandler(): void {
    //  console.log("Save Button clicked");
    //  console.log("aktueller Input: " + inputInterpret.value + inputPrice.value);
    //  localStorage.setItem("localStorage", inputInterpret.value + inputPrice.value);
    //}
    loadButton.addEventListener("click", loadButtonHandler);
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
})(testNamespace || (testNamespace = {}));
//# sourceMappingURL=localstorage.js.map