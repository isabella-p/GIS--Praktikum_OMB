namespace testNamespace {
    const inputInterpret: HTMLInputElement = <HTMLInputElement> document.getElementById("input-interpret");
    const inputPrice: HTMLInputElement = <HTMLInputElement> document.getElementById("input-price");
    const display: HTMLElement = <HTMLElement> document.querySelector("#display");
    const myButton: HTMLButtonElement = <HTMLButtonElement> document.querySelector("#mache-etwas");
    //const saveButton: HTMLButtonElement = <HTMLButtonElement> document.getElementById("save-button");
    const loadButton: HTMLButtonElement = <HTMLButtonElement> document.getElementById("load-button");
    const inputFeld: HTMLInputElement = <HTMLInputElement> document.getElementById("input-element");

    myButton.addEventListener("click", myButtonHandler); 
    
    console.log(inputInterpret);
    console.log(inputPrice);
    
    const  array: any [] = [];


    function myButtonHandler(): void {
        let interpretValue: string = inputInterpret.value;
        let priceValue: number = Number(inputPrice.value);
        // console.log("button click");
        
        // display.textContent = interpretValue + "; " + priceValue;
        let newElement: HTMLDivElement = document.createElement("div");

        let deleteButton: HTMLButtonElement = document.createElement("button");
        deleteButton.textContent = "Delete";
        
        array.push([interpretValue, priceValue]);
        localStorage.setItem("gisPraktikum_input", JSON.stringify(array));

        newElement.textContent = interpretValue + "; " + priceValue;
        display.appendChild(newElement);

        newElement.appendChild(deleteButton);

        deleteButton.addEventListener("click", function(): void {
            deleteEvent(newElement);
        });
    }

    function createEvent (interpret: string, price: number): void {
        let tr: HTMLElement = document.createElement("tr");
        let interpretElement: HTMLElement = document.createElement("td");
        let priceElement: HTMLElement = document.createElement("td");
        let deleteElement: HTMLElement = document.createElement("td");
        let deleteButtonElement: HTMLElement = document.createElement("delete-button");

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

    function loadButtonHandler(): void {
        console.log("Load Button clicked");
        let valueFromLocalStorage: string = localStorage.getItem("gisPraktikum_input");
        console.log("aktueller Wert im Local Storage: " + valueFromLocalStorage);
        display.textContent = valueFromLocalStorage;
    }

    loadButtonHandler();

    function deleteEvent(parentElement: HTMLDivElement): void {
        console.log("deleteEvent wurde aufgerufen!");
        display.removeChild(parentElement);
        let deleteEventId: string = (<HTMLElement>deleteEvent.arguments).id;
        console.log(deleteEventId);
        let tr: HTMLElement = document.getElementById("delete" + deleteEventId);
        tr.remove();
    }
}