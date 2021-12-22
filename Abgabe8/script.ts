namespace testNamespace {
    const inputInterpret: HTMLInputElement = <HTMLInputElement> document.getElementById("input-interpret");
    const inputPrice: HTMLInputElement = <HTMLInputElement> document.getElementById("input-price");
    const display: HTMLElement = <HTMLElement> document.querySelector("#display");
    const myButton: HTMLButtonElement = <HTMLButtonElement> document.querySelector("#mache-etwas");
   

    myButton.addEventListener("click", myButtonHandler); 
    
    console.log(inputInterpret);
    console.log(inputPrice);


   
    function myButtonHandler(): void {
        let interpretValue: string = inputInterpret.value;
        let priceValue: number = Number(inputPrice.value);
        // console.log("button click");
        

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
