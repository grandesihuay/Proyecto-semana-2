import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output }); 
// 🚫 No eliminar las líneas de arriba ⬆️

// ✍️ Escribe tu código aquí 👇
let systemName: string = "Real Code";
let version: number = 10.5;
let userName: string = "Billy Grande";

let mensaje: string = `===============================`;
let mensaje2: string = `${systemName} v${version}`;
let mensaje3: string = `¡Bienvenido, ${userName}!`;
let mensaje4: string = `===============================`;

console.log(mensaje);
console.log(mensaje2);
console.log(mensaje3);
console.log(mensaje4);


// 🚫 No eliminar las líneas de abajo ⬇️
rl.close(); 