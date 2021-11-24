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
    let arrayString = JSON.stringify(array);
    localStorage.setItem("localStorageElement", arrayString);
    function myButtonHandler() {
        let interpretValue = inputInterpret.value;
        let priceValue = inputPrice.value;
        // console.log("button click");
        let arrayFromStorageAsString = localStorage.getItem("localStorageElement");
        let numbersArray = JSON.parse(arrayFromStorageAsString);
        console.log(arrayFromStorageAsString);
        console.log(numbersArray);
        console.log(numbersArray[0] * numbersArray[2]);
        // display.textContent = interpretValue + "; " + priceValue;
        let newElement = document.createElement("div");
        newElement.textContent = interpretValue + "; " + priceValue;
        display.appendChild(newElement);
    }
})(testNamespace || (testNamespace = {}));
//# sourceMappingURL=script.js.map