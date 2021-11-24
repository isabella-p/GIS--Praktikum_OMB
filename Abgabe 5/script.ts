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

    interface ConcertEvent {
        interpret: string;
        price: number;
    }

    let concertEvent: ConcertEvent = {
        interpret: "Mark Knopfler",
        price: 10.1
    };

    let concertArray: ConcertEvent[] = [
        new ConcertEvent("Mark Knopfler", 10.1),
        new ConcertEvent("Pink Floyd", 15.9),
        new ConcertEvent("Metallica", 20.1),
        new ConcertEvent("Michael Bublé", 11.1),
        new ConcertEvent("Dire Straits", 12.2),
        new ConcertEvent("Mariah Carey", 1.1),
        new ConcertEvent("Cat Stevens", 12.9),
        new ConcertEvent("Mark Forster", 2.1),
        new ConcertEvent("Helene Fischer", 3.1),
        new ConcertEvent("Bee Gees", 25.2)
      ];

    console.log(concertEvent.interpret);
    
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
