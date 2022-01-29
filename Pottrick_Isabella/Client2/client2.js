"use strict";
var Client;
(function (Client) {
    console.log("Client läuft");
    const url = "http://127.0.0.1:3002";
    const path = "/myFreezer";
    const inputGefriergut = document.getElementById("name");
    const inputAnlegedatum = document.getElementById("anlegedatum");
    const inputAblaufdatum = document.getElementById("ablaufdatum");
    const inputAnzahl = document.getElementById("anzahl");
    //const display: HTMLElement = <HTMLElement>document.querySelector("#display");
    const myButton = document.getElementById("sendButton");
    const tabelle = document.getElementById("tabelle");
    myButton.addEventListener("click", (item) => {
        item.preventDefault();
        myButtonHandler(item);
    });
    let itemFromSever = [];
    window.addEventListener("load", () => {
        getData();
    });
    //myButton.addEventListener("click", myButtonHandler);
    async function getData() {
        let response = await fetch(url + path);
        let responseText = await response.text();
        console.log(responseText);
        itemFromSever = JSON.parse(responseText);
        console.log(itemFromSever);
        for (let i = 0; i < itemFromSever.length; i++) {
            createTabelle(itemFromSever[i].name, itemFromSever[i].anlegedatum, itemFromSever[i].ablaufdatum, itemFromSever[i].anzahl);
        }
    }
    async function sendInput(item) {
        await fetch(url + path, {
            method: "POST", body: JSON.stringify(item)
        });
        console.log("Gefriergut was sent");
    }
    async function sendJSONStringWithPOST(url, jsonString) {
        let response = await fetch(url, {
            method: "POST",
            body: jsonString
        });
    }
    async function myButtonHandler(item) {
        let name = inputGefriergut.value;
        let anlegedatum = inputAnlegedatum.value;
        let ablaufdatum = inputAblaufdatum.value;
        let anzahl = inputAnzahl.value;
        item.preventDefault();
        let freezerItem = {
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
    async function deleteHandle(_elementId) {
        const queryUrl = `${url}${path}?id=${_elementId}`;
        const response = await fetch(queryUrl, {
            method: "DELETE"
        });
        console.log("delete");
        let text = await response.text();
        console.log(text);
        loadCurrentEntries();
    }
    function createDeleteButton(_parentElement, _elementid) {
        const table = document.createElement("td");
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete Item";
        deleteButton.classList.add("deleteButton", "ui", "button", "negative");
        deleteButton.addEventListener("click", function (evt) {
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
    function createTabelle(nameValue, anlegedatumValue, ablaufdatumValue, anzahlValue) {
        let deleteID = 0;
        deleteID = deleteID + 1;
        let tr = document.createElement("tr");
        let name = document.createElement("td");
        let anlegedatum = document.createElement("td");
        let ablaufdatum = document.createElement("td");
        let anzahl = document.createElement("td");
        let deleteButtonID = "deleteButtonID" + deleteID;
        name.textContent = nameValue;
        anlegedatum.textContent = anlegedatumValue;
        ablaufdatum.textContent = ablaufdatumValue;
        anzahl.textContent = anzahlValue;
        let deleteButton = document.createElement("deleteButton");
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
        var formData = {};
        formData["name"] = document.getElementById("name").innerHTML;
        formData["anlegedatum"] = document.getElementById("anlegedatum").innerHTML;
        formData["ablaufdatum"] = document.getElementById("ablaufdatum").innerHTML;
        formData["anzahl"] = document.getElementById("anzahl").innerHTML;
        return formData;
    }
    async function requestName() {
        let response = await fetch("http://localhost:3002/myFreezer");
        let text = await response.text();
        console.log(JSON.parse(text));
        //return JSON.parse(text) as Event[];
    }
})(Client || (Client = {}));
//# sourceMappingURL=client2.js.map