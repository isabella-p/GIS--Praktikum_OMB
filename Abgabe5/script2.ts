namespace localStorageBeispiel {
    const inputFeld: HTMLInputElement = <HTMLInputElement> document.getElementById("input-element");
    const saveButton: HTMLButtonElement = <HTMLButtonElement> document.getElementById("save-button");
    const loadButton: HTMLButtonElement = <HTMLButtonElement> document.getElementById("load-button");
    const display: HTMLDivElement = <HTMLDivElement> document.getElementById("display");


    saveButton.addEventListener("click", saveButtonHandler);
    loadButton.addEventListener("click", loadButtonHandler);


    console.log("Test");

    function saveButtonHandler(): void {
        console.log("Save Button clicked");
        console.log("aktuelle Input: " + inputFeld.value);
        localStorage.setItem("gis_praktikum_input", inputFeld.value);
    }

    function loadButtonHandler(): void {
        console.log("Load Button clicked");
        let valueFromLocalStorage: string = localStorage.getItem("gis_praktikum_input");
        console.log("aktueller Wert im Local Storage: " + valueFromLocalStorage);
        display.textContent = valueFromLocalStorage;
    }
}