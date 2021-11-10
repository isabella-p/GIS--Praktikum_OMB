// -- [Aufgabe 1]

/**
 * @var {number} age: Bitte anstatt der 24 dein Alter eintragen
 */
let age: number = 21;

/**
 * @var {string} firstName: Bitte anstatt 'Max' deinen Vornamen eintragen
 */
let firstName: string = `Isabella`;

function func1(age: number): number {
  return 2021 - age;
}

let output: string = func2(firstName);

function func3(meal?: string): string {
  console.log(`Ich esse gerne ${meal || "Burger und Pommes"}.`);
  return func1(age) > 1995
    ? `Ich gehöre zur Generation Z`
    : `Ich gehöre zur Generation Y`;
}

console.log(output);

function func2(name: string): string {
  console.log(`Ich heiße ${name}.`);
  return func3();
}

/* -- HIER BITTE IHRE LÖSUNG ZUR AUFGABE 1 EINTRAGEN
 * Ich esse gerne Burger und Pommes
 * Ich heiße Isabella
 * Ich gehöre zur Generation Z
 */

// -- [Aufgabe 2]

let events: any[][] = [
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
var multi:any[][] = [[1,2,3,4,5],[6,7,8,9,10]]
console.log(multi[0][0])
console.log(multi[0][1])
console.log(multi[0][2])
console.log(multi[0][3]) 
console.log(multi[0][4]) 
console.log(multi[1][0]) 
console.log(multi[1][1])
console.log(multi[1][2]) 
console.log(multi[1][3]) 
console.log(multi[1][4])

console.log (events.length);

// Lösung b) ...
let singer: any[][] = [];
singer[0] = ["Mark Knopfler", 10.1];
singer[1] = ["Pink Floyd", 15.9];
singer[2] = ["Metallica", 20.1];
singer[3] = ["Michael Bublé", 11.1];
singer[4] = ["Dire Straits", 12.2];
singer[5] = ["Mariah Carey", 1.1];
singer[6] = ["Cat Stevens", 12.9];
singer[7] = ["Mark Forster", 2.1];
singer[8] = ["Helene Fischer", 3.1];
singer[9] = ["Bee Gees", 25.2];

console.log(singer);

// Lösung c) ...

for (let i: number = 0; i < events.length; i++) {
  if (events [i] ){

  console.log(i);
  }
}

// Lösung d) ...
var benutzerEingabe: any  = ""
for (let i: number = 0; i < events.length; i++) {
  if (events [i] == benutzerEingabe){
    console.log(true);
  }
  if (events [i] != benutzerEingabe){
    console.log(false);
  }
}
    
let creator: string = "Michael Bublé";
switch (creator) {
  case "Mark Knopfler":
  case "Pink Floyd": 
  case "Metallica": 
  case "Michael Bublé": 
  case "Dire Straits": 
  case "Mariah Carey": 
  case "Cat Stevens": 
  case "Mark Forster": 
  case "Helene Fischer": 
  case "Bee Gees": {
    console.log(true);
    break;
  }
  default: {
    console.log(false);
    break;
  }
}

// Lösung e) ...
function factorial (n :number){
  factorial(4);
  factorial(5);
  factorial(10);

  let i: number = 1;

  while (i > 0) {
  console.log(i);
  i++;
}

// Lösung f) ...
for (let i: number = 1; i <= 100; i++) {
  if (i % 3 == 0) {
    console.log (i);
  }
}

// Lösung g) ...
class ConcertEvent {
  interpret: string = "";
  price: number = 0;

  constructor (interpret: string, price: number){
    this.interpret = interpret; 
    this.price = price; 
  }
  show(){
    console.log  (this.interpret + " " + this.price)
  }
}

// Lösung h) ...