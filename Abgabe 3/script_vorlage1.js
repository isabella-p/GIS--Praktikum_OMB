"use strict";
// -- [Aufgabe 1]
/**
 * @var {number} age: Bitte anstatt der 24 dein Alter eintragen
 */
let age = 21;
/**
 * @var {string} firstName: Bitte anstatt 'Max' deinen Vornamen eintragen
 */
let firstName = `Isabella`;
function func1(age) {
    return 2021 - age;
}
let output = func2(firstName);
function func3(meal) {
    console.log(`Ich esse gerne ${meal || "Burger und Pommes"}.`);
    return func1(age) > 1995
        ? `Ich gehöre zur Generation Z`
        : `Ich gehöre zur Generation Y`;
}
console.log(output);
function func2(name) {
    console.log(`Ich heiße ${name}.`);
    return func3();
}
/* -- HIER BITTE IHRE LÖSUNG ZUR AUFGABE 1 EINTRAGEN
 * Ich esse gerne Burger und Pommes
 * Ich heiße Isabella
 * Ich gehöre zur Generation Z
 */
// -- [Aufgabe 2]
let events = [
    ["Mark Knopfler", 10.1],
    ["Pink Floyd", 15.9],
    ["Metallica", 20.1],
    ["Michael Bublé", 11.1],
    ["Dire Straits", 12.2],
    ["Mariah Carey", 1.1],
    ["Cat Stevens", 12.9],
    ["Mark Forster", 2.1],
    ["Helene Fischer", 3.1],
    ["Bee Gees", 25.2],
];
// -- HIER BITTE IHRE LÖSUNG ZUR AUFGABE 2 EINTRAGEN
// Lösung a) 
var multi = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]];
console.log(multi[0][0]);
console.log(multi[0][1]);
console.log(multi[0][2]);
console.log(multi[0][3]);
console.log(multi[0][4]);
console.log(multi[1][0]);
console.log(multi[1][1]);
console.log(multi[1][2]);
console.log(multi[1][3]);
console.log(multi[1][4]);
console.log(events.length);
// Lösung b) ...
for (let i = 0; i < events.length; i++) {
    console.log(events[i][0], events[i][1]);
}
// Lösung c) ...
function maxPrice(array) {
    let resultat = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i][1] > resultat) {
            resultat = array[i][1];
        }
    }
    return resultat;
}
let max = maxPrice(events);
console.log(max);
// Lösung d) ...
function interpretSearch(array, interpret) {
    for (let i = 0; i < array.length; i++) {
        if (array[i][0] == interpret) {
            return true;
        }
    }
    return false;
}
console.log(interpretSearch(events, "Michael Bublé"));
// Lösung e) ...
function factorial(n) {
    let result = 1;
    while (n > 0) {
        result *= n;
        n--;
    }
    console.log(result);
}
factorial(10);
// Lösung f) ...
let count = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
        count++;
        console.log(i);
    }
}
console.log("count: ", count);
// Lösung g) ...
class ConcertEvent {
    interpret = "";
    price = 0;
    constructor(interpret, price) {
        this.interpret = interpret;
        this.price = price;
    }
    show() {
        console.log(this.interpret + " " + this.price);
    }
}
// Lösung h) ...
let concertArray = [
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
for (let i = 0; i < concertArray.length; i++) {
    concertArray[i].show();
}
//# sourceMappingURL=script_vorlage1.js.map