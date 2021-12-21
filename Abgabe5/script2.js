"use strict";
var localStorageBeispiel;
(function (localStorageBeispiel) {
    const inputFeld = document.getElementById("input-element");
    const saveButton = document.getElementById("save-button");
    const loadButton = document.getElementById("load-button");
    const display = document.getElementById("display");
    saveButton.addEventListener("click", saveButtonHandler);
    loadButton.addEventListener("click", loadButtonHandler);
    console.log("Test");
    function saveButtonHandler() {
        console.log("Save Button clicked");
        console.log("aktuelle Input: " + inputFeld.value);
        localStorage.setItem("gis_praktikum_input", inputFeld.value);
    }
    function loadButtonHandler() {
        console.log("Load Button clicked");
        let valueFromLocalStorage = localStorage.getItem("gis_praktikum_input");
        console.log("aktueller Wert im Local Storage: " + valueFromLocalStorage);
        display.textContent = valueFromLocalStorage;
    }
})(localStorageBeispiel || (localStorageBeispiel = {}));
//# sourceMappingURL=script2.js.map