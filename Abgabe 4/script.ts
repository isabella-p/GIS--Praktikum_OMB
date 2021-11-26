
namespace testNamespace {

    // Verweise auf die HTML Elemente im DOM
    const inputIntpret: HTMLInputElement = <HTMLInputElement>document.getElementById("input-interpret"); //Verweis auf Interpret Input-Feld
    const inputPrice: HTMLInputElement = <HTMLInputElement>document.getElementById("input-price"); //Verweis auf Preis Input-Feld
    const display: HTMLElement = <HTMLElement>document.querySelector("#display"); //Verweis auf das Display-Elternelement
    const myButton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#mache-etwas"); //Verweis auf den Button

    // Füge dem Button einen Eventlistener hinzu, der auf Click-Events lauschen soll
    myButton.addEventListener("click", mybuttonHandler); // Wenn ein Click-Event auf den Button ausgeführt wird, soll die Funktion "myButtonHandler" ausgeführt werden.

    // Kurzer Test, ob die Input-Element im Dom auch gefunden wurden
    console.log(inputIntpret);
    console.log(inputPrice);
    // Wenn alles klappt, sollten die entsprechenden HTML-Elemente in der Entwicklerkonsole angezeigt werden.


    // Handler-Funktion für den Oben definierten Event-Listener
    function mybuttonHandler(): void {
        //Holen der aktuellen Inhalte aus den Input-Elementen 
        let interpretValue: string = inputIntpret.value; //Das hier steht gerade im Interpret-Input
        let priceValue: number = Number(inputPrice.value); //Der Price-Input soll bitte einen Zahl sein

        let newElement: HTMLDivElement = document.createElement("div"); // Erstelle ein Div-Element
        let deleteButton: HTMLButtonElement = document.createElement("button"); // Delete Button erstellen
        deleteButton.textContent = "Löschen"; //Delete-Button mit Inhalt füllen

        newElement.textContent = interpretValue + "; " + priceValue; //Fülle das Div-Element mit einem Text-Inhalt

        display.appendChild(newElement); //Füge nun noch Das erstellte Div-Element in das Display-Element als Kind-Objekt ein
        /* Da das Display Teil des DOMs ist und wir "newElement" dem Display-Element
        hinzugefügt haben ist das "newElement" nun auch Teil des DOMs und genaugenommen
        ein Kind(Child)-Objekt der Display-Elements */ 

        newElement.appendChild(deleteButton); //füge den Delete Button als Kindelement dem neu erstellten Element "newElement" hinzu

        // Eventlistener für den Deletebutton
        deleteButton.addEventListener("click", function(): void {
            deleteEvent(newElement); //Übergeben wird als Parameter das Element, welches später gelöscht werden soll.
        });

    }

    // Eventlistener für die Delete-Buttons
    function deleteEvent(parentElement: HTMLDivElement): void {
        console.log("deleteEvent wurde aufgerufen!"); // Konsolenausgabe zum Testen des Funktionsaufrufes
        display.removeChild(parentElement); //Lösche das als Parameter übergebene Element aus dem Elter-Element "display"
    }
}