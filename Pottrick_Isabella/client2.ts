namespace Client {
    console.log("Client läuft");
    const url: string = "http://127.0.0.1:3002";
    const path: string = "/myFreezer";


    const inputGefriergut: HTMLInputElement = <HTMLInputElement>document.getElementById("name");
    const inputAnlegedatum: HTMLInputElement = <HTMLInputElement>document.getElementById("anlegedatum");
    const inputAblaufdatum: HTMLInputElement = <HTMLInputElement>document.getElementById("ablaufdatum");
    const inputAnzahl: HTMLInputElement = <HTMLInputElement>document.getElementById("anzahl");
    //const display: HTMLElement = <HTMLElement>document.querySelector("#display");
    const myButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("sendButton");
    const tabelle: HTMLElement = <HTMLElement>document.getElementById("tabelle");

    myButton.addEventListener("click", (item) => {
        item.preventDefault();
        myButtonHandler(item);
    });
    //myButton.addEventListener("click", myButtonHandler);
    //console.log(myButton);
    //console.log(inputInterpret);
    //console.log(inputPrice);

    interface freezerItem {
        name: string;
        anlegedatum?: string;
        ablaufdatum?: string;
        anzahl?: string;
    }

    let itemFromSever: freezerItem[] = [];
    window.addEventListener("load", () => {
        getData();
    });
    //myButton.addEventListener("click", myButtonHandler);

    async function getData(): Promise<void> {
        let response: Response = await fetch(url + path);
        let responseText: string = await response.text();
        console.log(responseText);
        itemFromSever = JSON.parse(responseText);
        console.log(itemFromSever);

        for (let i: number = 0; i < itemFromSever.length; i++) {
            createTabelle(itemFromSever[i].name, itemFromSever[i].anlegedatum, itemFromSever[i].ablaufdatum, itemFromSever[i].anzahl);
        }
    }

    async function sendInput(item: freezerItem): Promise<void> {
        await fetch(url + path, {
            method: "POST", body: JSON.stringify(item)
        });
        console.log("Gefriergut was sent");
    }

    async function sendJSONStringWithPOST(
        url: RequestInfo,
        jsonString: string
    ): Promise<void> {
        let response: Response = await fetch(url, {
            method: "POST", 
            body: jsonString
        });
    }

    async function myButtonHandler(item: Event): Promise<void> {
        let name: string = inputGefriergut.value;
        let anlegedatum: string = inputAnlegedatum.value;
        let ablaufdatum: string = inputAblaufdatum.value;
        let anzahl: string = inputAnzahl.value;

        item.preventDefault();
        let freezerItem: freezerItem = {
            name: name,
            anlegedatum: anlegedatum,
            ablaufdatum: ablaufdatum,
            anzahl: anzahl
        };
        console.log(freezerItem);
        await sendInput(freezerItem);

        createTabelle(freezerItem.name, freezerItem.anlegedatum, freezerItem.ablaufdatum, freezerItem.anzahl);
        sendJSONStringWithPOST(url + path, JSON.stringify(freezerItem));
    }

    async function deleteHandle(_elementId: string): Promise<void> {
        const queryUrl: string = `${url}${path}?id=${_elementId}`;
        const response: Response = await fetch(queryUrl, {
            method: "DELETE"
        });
        console.log("delete");
        let text: string = await response.text();
        console.log(text);
        loadCurrentEntries();
    }

    function createDeleteButton(_parentElement: HTMLElement, _elementid: string): HTMLTableCellElement {
        const table: HTMLTableCellElement = document.createElement("td");
        const deleteButton: HTMLButtonElement = <HTMLButtonElement>document.createElement("button");
        deleteButton.textContent = "Delete Item";

        deleteButton.classList.add("deleteButton", "ui", "button", "negative");

        deleteButton.addEventListener("click", function (evt: Event): void {
            evt.preventDefault();
            deleteHandle(_elementid);
        });

        table.appendChild(deleteButton);
        return table;
    }

    /*function createTableCell(_value: string, _name: string): HTMLTableCellElement {
        const table: HTMLTableCellElement = document.createElement("td");
        table.setAttribute(_name, _value);
        table.textContent = _value;
        return table;
    }

    async function loadCurrentEntries() {
        const response = await fetch(`${url}${path}`, {
            method: "get"
        });
        const result = await response.json();
        console.log(result);
        updateView(result);
    }

    function updateView(_freezerItem: freezerItem[]): void {
        tableBody.textContent = "";
        for (const freezerItem of _freezerItem) {
          const tableEntry: HTMLTableRowElement = document.createElement("tr");
          tableEntry.classList.add("table-entry");
      
          let cells: HTMLTableCellElement[] = [
            createTableCell(freezerItem.name, "data-interpret"),
            createTableCell(freezerItem.anlegedatum.toString(), "data-price"),
            createTableCell(freezerItem.ablaufdatum, "data-date"),
            createTableCell(freezerItem.anzahl, "data-date"),
            createDeleteButtonCell(tableEntry, freezerItem.name)
          ];
      
          for (const cell of cells) {
            tableEntry.appendChild(cell);
          }
      
          tableBody.appendChild(tableEntry);
        }
    }*/

    function createTabelle(nameValue: string, anlegedatumValue: string, ablaufdatumValue: string, anzahlValue: string): void {
        let deleteID: number = 0;
        deleteID = deleteID + 1;
        let tr: HTMLElement = document.createElement("tr");
        let name: HTMLElement = document.createElement("td");
        let anlegedatum: HTMLElement = document.createElement("td");
        let ablaufdatum: HTMLElement = document.createElement("td");
        let anzahl: HTMLElement = document.createElement("td");
        let deleteButtonID: string = "deleteButtonID" + deleteID;
        name.textContent = nameValue;
        anlegedatum.textContent = anlegedatumValue;
        ablaufdatum.textContent = ablaufdatumValue;
        anzahl.textContent = anzahlValue;

        let deleteButton: HTMLElement = document.createElement("deleteButton");
        deleteButton.textContent = "remove";
        deleteButton.setAttribute("id", deleteButtonID);

        /*tabelle.appendChild(tr);
        tr.setAttribute("id", "row-" + deleteButtonID);
        tr.appendChild(name);
        tr.appendChild(anlegedatum);
        tr.appendChild(ablaufdatum);
        tr.appendChild(anzahl);
        tr.appendChild(deleteButton);*/
    }

    function readData() {
        var formData: any = {};
        formData["name"] = document.getElementById("name").innerHTML;
        formData["anlegedatum"] = document.getElementById("anlegedatum").innerHTML;
        formData["ablaufdatum"] = document.getElementById("ablaufdatum").innerHTML;
        formData["anzahl"] = document.getElementById("anzahl").innerHTML;
        return formData;
    }

    async function requestName(): Promise<void> {
        let response: Response = await fetch("http://localhost:3002/myFreezer");
        let text: string = await response.text();
        console.log(JSON.parse(text));
        //return JSON.parse(text) as Event[];
    }
}