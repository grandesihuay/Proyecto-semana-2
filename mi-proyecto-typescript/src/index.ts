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

//--------------------------------

let tareas: string[] = [];
let opcion: string;

do {
    console.log(`
1. Agregar tarea
2. Eliminar última tarea
3. Lista de tareas
4. Salir
`);

    opcion = await rl.question("Opción: ");
    switch (opcion) {
        case "1":
            tareas.push(await rl.question("Tarea: "));
            break;

        case "2":
            console.log("Tarea eliminada:", tareas.pop());
            break;

        case "3":
            for (let i = 0; i < tareas.length; i++)
                console.log(`${i + 1}. ${tareas[i]}`);
            break;

        case "4":
            console.log("Cualquier cosa, hasta luego!");
            break;

        default:
            console.log("Opción inválida.");
    }
} while (opcion !== "4");

// 🚫 No eliminar las líneas de abajo ⬇️
rl.close(); 