namespace testNamespace {
    const inputInterpret: HTMLInputElement = <HTMLInputElement> document.getElementById("input-interpret");
    const inputPrice: HTMLInputElement = <HTMLInputElement> document.getElementById("input-price");
    const display: HTMLElement = <HTMLElement> document.querySelector("#display");
    const myButton: HTMLButtonElement = <HTMLButtonElement> document.querySelector("#mache-etwas");
   

    let arrayFromStorageAsString: string = localStorage.getItem("localStorageElement");
    let numbersArray: string = JSON.parse(arrayFromStorageAsString);
    console.log(numbersArray);



    myButton.addEventListener("click", myButtonHandler); 
    
    console.log(inputInterpret);
    console.log(inputPrice);


    let array: number [] = [12, 15, 17, 20];
    let arrayIGotFromLocalStorage: number[];
    let arrayString: string = JSON.stringify(array);

    localStorage.setItem("localStorageElement", arrayString);

    let stringFromLocalStorage: string = localStorage.getItem("myArray");
    arrayIGotFromLocalStorage = JSON.parse(stringFromLocalStorage);

    console.log("Das Array mit dem Key 'myArray' aus dem LocalStorage:", arrayIGotFromLocalStorage);
    console.log("Der Wert an der Stelle[0] mal den Wert an der Stelle[2]=", arrayIGotFromLocalStorage[0] * arrayIGotFromLocalStorage[2]);
    

    
    function myButtonHandler(): void {
        let interpretValue: string = inputInterpret.value;
        let priceValue: number = Number(inputPrice.value);
        // console.log("button click");

        let arrayFromStorageAsString: string = localStorage.getItem("localStorageElement");
        let numbersArray: any = JSON.parse(arrayFromStorageAsString);
        console.log(arrayFromStorageAsString);
        console.log(numbersArray);
 
        console.log(numbersArray[0] * numbersArray[2]);
        

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


    function deleteEvent(parentElement: HTMLDivElement): void {
        console.log("deleteEvent wurde aufgerufen!");
        display.removeChild(parentElement);
    }

}
