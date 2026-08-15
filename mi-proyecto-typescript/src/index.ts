import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });
// 🚫 No eliminar las líneas de arriba ⬆️

// 2. Interface Task
interface Task {
  id: number;
  title: string;
  completed: boolean;
}

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
let tareas: Task[] = [];

// Arrow function para agregar una nueva tarea
const addTask = (title: string) => {
  let nuevaTarea: Task = {
    id: tareas.length + 1,
    title: title,
    completed: false
  };
  tareas.push(nuevaTarea);
  console.log("Tarea agregada exitosamente");
};

// Arrow function para eliminar la última tarea
const removeTask = () => {
  let borrada = tareas.pop();
  if (borrada) {
    console.log("Se elimino la tarea: " + borrada.title);
  } else {
    console.log("No hay tareas para eliminar.");
  }
};

// Marca una tarea como completada buscando por id con find
const markCompleted = (id: number) => {
  const tarea = tareas.find((t) => t.id === id);
  if (tarea) {
    tarea.completed = true;
    console.log(`Tarea "${tarea.title}" marcada como completada.`);
  } else {
    console.log(`No se encontró ninguna tarea con id ${id}.`);
  }
};

// Retorna solo las tareas pendientes usando .filter()
const filterPending = (): Task[] => {
  return tareas.filter((t) => !t.completed);
};

// Retorna solo las tareas completadas usando .filter()
const filterCompleted = (): Task[] => {
  return tareas.filter((t) => t.completed);
};

// Arrow function para listar tareas (con desestructuración, .map() y .forEach())
const listTasks = (lista: Task[] = tareas) => {
  if (lista.length === 0) {
    console.log("La lista de tareas está vacía.");
    return;
  }

  console.log("Lista de tareas:");

  const lineas = lista.map((tarea) => {
    const { id, title, completed } = tarea;
    const estado = completed ? "completado" : "pendiente";
    return "[" + id + "] " + title + " - " + estado;
  });

  lineas.forEach((linea) => console.log(linea));
};

// Menú interactivo
let opcion: string = "";

while (opcion !== "7") {
  console.log("\n--- MENÚ ---");
  console.log("1. Agregar tarea");
  console.log("2. Eliminar última tarea");
  console.log("3. Listar tareas");
  console.log("4. Marcar tarea como completada");
  console.log("5. Ver tareas pendientes");
  console.log("6. Ver tareas completadas");
  console.log("7. Salir");

  opcion = await rl.question("Elige una opcion: ");

  if (opcion === "1") {
    let titulo = await rl.question("Escribe la tarea: ");
    addTask(titulo);
  }
  else if (opcion === "2") {
    removeTask();
  }
  else if (opcion === "3") {
    listTasks();
  }
  else if (opcion === "4") {
    let idTexto = await rl.question("Escribe el id de la tarea a completar: ");
    let id = Number(idTexto);
    markCompleted(id);
  }
  else if (opcion === "5") {
    listTasks(filterPending());
  }
  else if (opcion === "6") {
    listTasks(filterCompleted());
  }
  else if (opcion === "7") {
    console.log("¡Hasta luego!");
  }
  else {
    console.log("Opción no válida.");
  }
}

// 🚫 No eliminar las líneas de abajo ⬇️
rl.close();