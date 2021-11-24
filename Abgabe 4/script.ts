namespace testNamespace {
    const inputInterpret: HTMLInputElement = <HTMLInputElement> document.getElementById("input-interpret");
    const inputPrice: HTMLInputElement = <HTMLInputElement> document.getElementById("input-price");
    const display: HTMLElement = <HTMLElement> document.querySelector("#display");
    const myButton: HTMLButtonElement = <HTMLButtonElement> document.querySelector("#mache-etwas");
    const deleteButton: HTMLButtonElement = <HTMLButtonElement> document.querySelector("#delete");
    const table: HTMLTableElement = <HTMLTableElement> document.querySelector("#Tabelle1");



    let arrayFromStorageAsString: string = localStorage.getItem("localStorageElement");
    let numbersArray = JSON.parse(arrayFromStorageAsString);



    myButton.addEventListener("click", myButtonHandler); 
    deleteButton.removeEventListener("click", deleteButtonHandler);

    console.log(inputInterpret);
    console.log(inputPrice);


    let array: number [] = [12, 15, 17, 20];
    let arrayString: string = JSON.stringify(array);

    localStorage.setItem("localStorageElement", arrayString);

    
    function myButtonHandler(){
        let interpretValue: string = inputInterpret.value;
        let priceValue: number = Number(inputPrice.value);
        // console.log("button click");

        let arrayFromStorageAsString: string = localStorage.getItem("localStorageElement");
        let numbersArray = JSON.parse(arrayFromStorageAsString);
        console.log(arrayFromStorageAsString);
        console.log(numbersArray);

        console.log(numbersArray[0] * numbersArray[2]);
        

        // display.textContent = interpretValue + "; " + priceValue;
        let newElement = document.createElement("div");
        newElement.textContent = interpretValue + "; " + priceValue + deleteButton;
        display.appendChild(newElement);

    }

    function deleteButtonHandler(){
        let interpretValue: string = inputInterpret.value;
        let priceValue: number = Number(inputPrice.value);

        let deleteElement = document.createElement("div");
        deleteElement.textContent = interpretValue + "; " + priceValue;
        display.removeChild(deleteElement);

    }
}
