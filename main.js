import { add, subtract, getAge } from "./calculator/calculator.js";
import { writeTextfile } from "./utils/writeFile.js";

console.log("Hello, Git");

console.log(add(3, 6));
console.log(subtract(6, 2));

let name = "Pororo";
let intro = `Hello, I'm ${name} and I'm ${getAge(2003)} years old`;

writeTextfile(intro);
